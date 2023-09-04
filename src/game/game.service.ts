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
import { Map1 } from './maps/1'
import { bulletsFrameLogic } from './logics/bullet.logic'
import { playerFrameLogic } from './logics/players.logic'
import { Game } from './init/game.init'
import { enemiesFrameLogic, enemiesSpawnLogic } from './logics/enemy.logic'

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
		const game = new Game(lobby.id, Map1, lobby.p1.id, p2)
		this.gameManager[game.id] = game
		setInterval(() => this.frameGame(game, server), 23)
	}

	frameGame(game: Game, server: Server) {
		playerFrameLogic(game, 1)
		playerFrameLogic(game, 2)
		if (!game.isPaused) {
			bulletsFrameLogic(game)
			enemiesSpawnLogic(game)
			enemiesFrameLogic(game)
		}
		server.to(game.id).emit(GameActions.frame, game)
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
