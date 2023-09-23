import { Injectable } from '@nestjs/common'
import {
	GameActions,
	GameManager,
	Lobby,
	LobbyManager,
	TypeDirection,
} from './types'
import { v4 as uuid4 } from 'uuid'
import { Server } from 'socket.io'
import { CreateLobbyDto, InputDto, JoinLobbyDto, publicLobbyData } from './dto'
import { Settings } from './settings'
import { Game } from './init'
import {
	animationsFrameLogic,
	bonusesFrameLogic,
	bulletsFrameLogic,
	enemiesFrameLogic,
	enemiesSpawnLogic,
	gameStatusFrameLogic,
	levelFrameLogic,
	playersFrameLogic,
} from './logics'

@Injectable()
export class GameService {
	lobbyManager: LobbyManager = {}
	gameManager: GameManager = {}

	createLobby(dto: CreateLobbyDto) {
		if (this.lobbyManager[dto.name]) return
		const lobby = {
			...dto,
			id: uuid4(),
			expireMinute: Settings.lobbyExpireMinute,
		}
		this.lobbyManager[lobby.name] = lobby
		setTimeout(
			() => {
				delete this.lobbyManager[lobby.name]
			},
			Settings.lobbyExpireMinute * 1000 * 60
		)

		return publicLobbyData([lobby])[0]
	}

	joinLobby(dto: JoinLobbyDto, server: Server) {
		const lobby = this.lobbyManager[dto.name]
		if (!lobby) return
		lobby.p1.join(lobby.id)
		dto.p2.join(lobby.id)
		this.startGame(lobby, dto.p2.id, server)
	}

	deleteLobby(name: string) {
		delete this.lobbyManager[name]
	}

	startGame(lobby: Lobby, p2: string, server: Server) {
		const game = new Game(
			lobby.id,
			lobby.p1.id,
			p2,
			lobby.settings,
			lobby.editor
		)
		this.gameManager[game.id] = game
		delete this.lobbyManager[game.id]
		// eslint-disable-next-line prefer-const
		let gameInterval: NodeJS.Timeout
		const clearGameInterval = () => {
			clearInterval(gameInterval)
		}
		gameInterval = setInterval(
			() => this.frameGame(game, server, clearGameInterval),
			Settings.frameRate
		)
		setTimeout(
			() => {
				game.isEnded = true
			},
			Settings.gameExpireMinute * 1000 * 60
		)
	}

	frameGame(game: Game, server: Server, clearGameInterval: () => void) {
		const {
			levelChangeAnimation,
			gameOverAnimation,
			isPaused,
			id,
			isEnded,
		} = game
		game.resetSounds()
		levelFrameLogic(game)
		gameStatusFrameLogic(game)
		if (!levelChangeAnimation) {
			if (!gameOverAnimation) {
				playersFrameLogic(game)
			}
			if (!isPaused) {
				bonusesFrameLogic(game)
				bulletsFrameLogic(game)
				enemiesSpawnLogic(game)
				enemiesFrameLogic(game)
				animationsFrameLogic(game)
			}
		}
		server
			.to(id)
			.emit(GameActions.frame, { game, timeSent: new Date().getTime() })
		if (isEnded) {
			delete this.gameManager[id]
			clearGameInterval()
			server.to(id).emit(GameActions.ended, 'Game ended')
		}
	}

	input(dto: InputDto) {
		const game = this.gameManager[dto.gameId]
		if (!game) return

		const playerController =
			dto.player === game.p1.id ? game.p1Controls : game.p2Controls

		const button = dto.button
		if (
			button === 'TOP' ||
			button === 'RIGHT' ||
			button === 'LEFT' ||
			button === 'BOTTOM'
		) {
			playerController.move = dto.button as TypeDirection
		}
		if (button === 'FIRE') playerController.fire = true
		if (button === 'PAUSE') playerController.pause = true
	}
}
