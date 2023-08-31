import { Injectable } from '@nestjs/common'
import {
	BusyCoordinates,
	DeleteLobbyDto,
	GameActions,
	GameManager,
	InputDto,
	Lobby,
	LobbyManager,
} from './types'
import { v4 as uuid4 } from 'uuid'
import { Server } from 'socket.io'
import { CreateLobbyDto, JoinLobbyDto, publicLobbyData } from './dto'
import { Map1 } from './maps/1'
import { getBlocksSideCoordinates } from './utils/blocks.utils'
import {
	getAnotherPLayerCoordinates,
	getTankAvailableMoves,
} from './utils/tank.utils'
import { bulletsFrameLogic } from './logics/bullet.logic'
import { playersCooldownFrameLogic } from './logics/players.logic'
import { Bullet } from './init/bullet.init'
import { Game } from './init/game.init'
import { moveTank } from './logics/tank.logic'

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
		setInterval(() => this.frameGame(game, server), 30)
	}

	frameGame(game: Game, server: Server) {
		// *** CHECK SPEED LOSE PER FRAME ***
		//
		// const frameTime = new Date().getTime()
		// if (this.prevFrame) {
		// 	if (this.maxPing < frameTime - this.prevFrame) {
		// 		this.maxPing = frameTime - this.prevFrame
		// 	}
		// }
		// this.prevFrame = frameTime
		// console.log(this.maxPing)
		const p1 = game.p1
		const p2 = game.p2
		playersCooldownFrameLogic(p1, p2)
		bulletsFrameLogic(game.bullets)
		server.to(game.id).emit(GameActions.frame, game)
	}

	input(dto: InputDto) {
		const button = dto.button
		if (
			button === 'TOP' ||
			button === 'RIGHT' ||
			button === 'LEFT' ||
			button === 'BOTTOM'
		) {
			this.move(dto)
		}
		if (button === 'FIRE') this.fire(dto)
	}

	move(dto: InputDto) {
		const { p, objects, pAnother } = this.getGameData(
			dto.gameId,
			dto.player
		)

		if (!p.isAlive) return

		const y = p.coordinateY
		const x = p.coordinateX
		const direction = p.direction

		const busyCoordinates: BusyCoordinates[] = []

		getBlocksSideCoordinates(objects, busyCoordinates)
		getAnotherPLayerCoordinates(pAnother, busyCoordinates)

		const availableMoves = getTankAvailableMoves(
			busyCoordinates,
			direction,
			x,
			y
		)

		moveTank(availableMoves, dto.button, p)
	}

	getGameData(gameId: string, player?: string) {
		const game = this.gameManager[gameId]
		if (!game || game.isPaused) throw ''
		return {
			game,
			p1: game.p1,
			p2: game.p2,
			objects: game.objects,
			bullets: game.bullets,
			p: player === game.p1.id ? game.p1 : game.p2,
			pAnother: player === game.p1.id ? game.p2 : game.p1,
		}
	}

	fire(dto: InputDto) {
		const { gameId, player } = dto
		const { game, p } = this.getGameData(gameId, player)
		if (p.cooldown !== 0) return
		if (!p.isAlive) return

		const y = p.coordinateY
		const x = p.coordinateX
		const direction = p.direction

		p.cooldown = 30

		const bullet = new Bullet(x, y, direction, 'PLAYER', 1)
		game.bullets.push(bullet)
	}
}
