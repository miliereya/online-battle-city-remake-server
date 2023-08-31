import { Game } from '../init/game.init'

export enum GameActions {
	frame = 'game/frame',
	input = 'game/input',
}

export type TypeMoveButton = 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT'
type TypeActionButton = 'FIRE' | 'PAUSE'

export type TypeButton = TypeMoveButton | TypeActionButton

export interface AvailableMoves {
	top: boolean
	bottom: boolean
	right: boolean
	left: boolean
}

export type TypeEnemyTank = 'NORMAL' | 'SPEEDY' | 'HEAVY'
export type TypePlayerTank = 'LVL_0' | 'LVL_1' | 'LVL_2' | 'LVL_3'

export type TypeTank = TypeEnemyTank | TypePlayerTank

export interface InputDto {
	button: TypeButton
	gameId: string
	player: string
}

export type TypeGameBLock = 'STONE' | 'BRICK' | 'WATER' | 'TREES' | 'ICE'
export type TypeBonus = 'GRENADE' | 'HELMET' | 'SHOVEL' | 'STAR'

export type Cell =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25

export interface Coordinates {
	coordinateX: number
	coordinateY: number
}

export interface BusyCoordinates extends Coordinates {
	type: TypeObject
}

export type TypeShooter = 'PLAYER' | 'ENEMY'
export type TypeObject = TypeGameBLock | TypeBonus | TypeTank

export interface GameManager {
	[key: string]: Game
}
