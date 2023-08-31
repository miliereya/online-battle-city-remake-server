import { Socket } from 'socket.io'
import { Lobby } from '../types'

export interface CreateLobbyDto {
	name: string
	p1: Socket
}

export interface JoinLobbyDto {
	id: string
	p2: Socket
}

export function publicLobbyData(lobbies: Lobby[]) {
	const data = []
	for (let i = 0; i < lobbies.length; i++) {
		data.push({
			name: lobbies[i]['name']['name'],
			id: lobbies[i].id,
		})
	}
	return data
}
