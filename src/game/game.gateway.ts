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
import { InputDto } from './dto'

@WebSocketGateway({
	cors: {
		credentials: true,
		origin: 'https://portfolio-client-eosin.vercel.app',
	},
})
export class GameGateway {
	constructor(private readonly gameService: GameService) {}

	@WebSocketServer()
	server: Server

	@SubscribeMessage(LobbyActions.create)
	createLobby(@ConnectedSocket() p1: Socket, @MessageBody() name: string) {
		return this.gameService.createLobby({ p1, name })
	}

	@SubscribeMessage(LobbyActions.find)
	findLobbies() {
		return this.gameService.findLobbies()
	}

	@SubscribeMessage(LobbyActions.join)
	joinLobby(@ConnectedSocket() p2: Socket, @MessageBody() id: string) {
		this.gameService.joinLobby({ p2, id }, this.server)
	}

	@SubscribeMessage(GameActions.input)
	input(@ConnectedSocket() player: Socket, @MessageBody() dto: InputDto) {
		this.gameService.input({ ...dto, player: player.id })
	}
}
