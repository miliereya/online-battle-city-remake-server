import { Socket } from 'socket.io'
import { EditorObject, GameSettings } from '.'

export interface Lobby {
	id: string
	name: string
	p1: Socket
	settings: GameSettings
	expireMinute: number
	editor?: EditorObject[]
}

export interface LobbyManager {
	[key: string]: Lobby
}
