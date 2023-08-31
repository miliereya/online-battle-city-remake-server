import { Socket } from 'socket.io'

export interface Lobby {
	id: string
	name: string
	p1: Socket
}

export interface DeleteLobbyDto {
	id: string
}

export enum LobbyActions {
	create = 'lobby/create',
	find = 'lobby/find',
	join = 'lobby/join',
	delete = 'lobby/delete',
}

export interface LobbyManager {
	[key: string]: Lobby
}
