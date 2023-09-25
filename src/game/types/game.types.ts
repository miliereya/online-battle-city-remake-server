import { Game } from '../init'

export interface GameManager {
	[key: string]: Game
}

export interface GameSettings {
	hardcore: boolean
	playerLevel: 0 | 1 | 2 | 3
	friendlyFire: boolean
	soundPack: 'default' | 'mario' | 'funny'
}
