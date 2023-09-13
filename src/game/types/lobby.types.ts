import { Socket } from 'socket.io'

export interface Lobby {
	id: string
	name: string
	p1: Socket
}

export interface DeleteLobbyDto {
	id: string
}

export interface LobbyManager {
	[key: string]: Lobby
}
