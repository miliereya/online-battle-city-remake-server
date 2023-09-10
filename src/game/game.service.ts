import { Injectable } from '@nestjs/common'
import {
	DeleteLobbyDto,
	GameActions,
	GameManager,
	InputDto,
	Lobby,
	LobbyManager,
	TypeMoveButton,
} from './types'
import { v4 as uuid4 } from 'uuid'
import { Server } from 'socket.io'
import { CreateLobbyDto, JoinLobbyDto, publicLobbyData } from './dto'
import { bulletsFrameLogic } from './logics/bullet.logic'
import { playerFrameLogic } from './logics/players.logic'
import { Game } from './init/game.init'
import { enemiesFrameLogic, enemiesSpawnLogic } from './logics/enemy.logic'
import { bonusesFrameLogic } from './logics/bonuses.logic'
import {
	gameStatusLogic,
	globalFrameLogic,
	levelFrameLogic,
} from './logics/global.logic'
import { animationsFrameLogic } from './logics/animations.logic'

@Injectable()
export class GameService {
	// maxPing = 0
	// prevFrame: number
	lobbyManager: LobbyManager = {}
	gameManager: GameManager = {}

	createLobby(dto: CreateLobbyDto) {
		const lobby = {
			...dto,
			id: uuid4(),
		}
		this.lobbyManager[lobby.id] = lobby
		return publicLobbyData([lobby])[0]
	}

	findLobbies() {
		return publicLobbyData(Object.values(this.lobbyManager))
	}

	joinLobby(dto: JoinLobbyDto, server: Server) {
		const lobby = this.lobbyManager[dto.id]
		lobby.p1.join(lobby.id)
		dto.p2.join(lobby.id)
		this.startGame(lobby, dto.p2.id, server)
	}

	deleteLobby(dto: DeleteLobbyDto) {
		delete this.lobbyManager[dto.id]
		return 'lobby deleted'
	}

	startGame(lobby: Lobby, p2: string, server: Server) {
		const game = new Game(lobby.id, lobby.p1.id, p2)
		this.gameManager[game.id] = game
		delete this.lobbyManager[game.id]
		// eslint-disable-next-line prefer-const
		let gameInterval: NodeJS.Timeout
		const clearGameInterval = () => {
			clearInterval(gameInterval)
		}
		gameInterval = setInterval(
			() => this.frameGame(game, server, clearGameInterval),
			23
		)
	}

	frameGame(game: Game, server: Server, clearGameInterval: () => void) {
		game.sounds = {
			heavy_hit: false,
			pause: false,
			level_start: false,
			bang: false,
			flag_bang: false,
			game_over: false,
			shoot: false,
			hit_1: false,
			bonus_spawn: false,
			bonus_pickup: false,
			player_move: false,
		}
		levelFrameLogic(game)
		gameStatusLogic(game)
		if (!game.levelChangeAnimation) {
			if (!game.gameOverAnimation) {
				playerFrameLogic(game, 1)
				playerFrameLogic(game, 2)
			}
			if (!game.isPaused) {
				globalFrameLogic(game)
				bonusesFrameLogic(game)
				bulletsFrameLogic(game)
				enemiesSpawnLogic(game)
				enemiesFrameLogic(game)
				animationsFrameLogic(game)
			}
		}
		server.to(game.id).emit(GameActions.frame, game)
		if (game.isEnded) {
			delete this.gameManager[game.id]
			clearGameInterval()
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
			playerController.move = dto.button as TypeMoveButton
		}
		if (button === 'FIRE') playerController.fire = true
		if (button === 'PAUSE') playerController.pause = true
	}

	getGameData(gameId: string, player?: string) {
		const game = this.gameManager[gameId]
		if (!game || game.isPaused) return null
		return {
			game,
			p1: game.p1,
			p2: game.p2,
			objects: game.objects,
			bullets: game.bullets,
			p: player === game.p1.id ? game.p1 : game.p2,
			pAnother: player === game.p1.id ? game.p2 : game.p1,
			enemies: game.enemies,
		}
	}
}
