import {
	ConnectedSocket,
	MessageBody,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets'
import { GameActions, LobbyActions } from './types'
import { GameService } from './game.service'
import { Socket, Server } from 'socket.io'
import { CreateLobbyDto, InputDto } from './dto'

@WebSocketGateway({
	cors: {
		credentials: true,
		origin: process.env.CLIENT_URL,
	},
})
export class GameGateway {
	constructor(private readonly gameService: GameService) {}
	@WebSocketServer()
	server: Server

	@SubscribeMessage(LobbyActions.create)
	createLobby(
		@ConnectedSocket() p1: Socket,
		@MessageBody() dto: CreateLobbyDto
	) {
		return this.gameService.createLobby({
			...dto,
			p1,
		})
	}

	@SubscribeMessage(LobbyActions.ping)
	ping() {
		return new Date().getTime()
	}

	@SubscribeMessage(LobbyActions.join)
	joinLobby(@ConnectedSocket() p2: Socket, @MessageBody() name: string) {
		this.gameService.joinLobby({ p2, name }, this.server)
	}

	@SubscribeMessage(LobbyActions.delete)
	deleteLobby(@MessageBody() name: string) {
		this.gameService.deleteLobby(name)
	}

	@SubscribeMessage(GameActions.input)
	input(@ConnectedSocket() player: Socket, @MessageBody() dto: InputDto) {
		this.gameService.input({ ...dto, player: player.id })
	}
}
