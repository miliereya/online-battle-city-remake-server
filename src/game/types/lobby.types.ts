import { Socket } from 'socket.io'
import { EditorObject } from './game.types'

export interface Lobby {
	id: string
	name: string
	p1: Socket
	editor?: EditorObject[]
}

export interface DeleteLobbyDto {
	id: string
}

export interface LobbyManager {
	[key: string]: Lobby
}
