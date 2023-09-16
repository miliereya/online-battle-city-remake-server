import { GameObject } from '../init/game-object.init'
import { Game } from '../init/game.init'

export type TypeDirection = 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT'
type TypeActionButton = 'FIRE' | 'PAUSE'

export type TypeButton = TypeDirection | TypeActionButton

export type TypeEnemySpawnPosition = 'middle' | 'left' | 'right'

export interface AvailableMoves {
	top: boolean
	bottom: boolean
	right: boolean
	left: boolean
}

export interface EditorObject extends Coordinates {
	type: TypeGameBLock
}

export type TypeEnemyTank = 'NORMAL' | 'SPEEDY' | 'HEAVY'
export type TypePlayerTank = 'LVL_0' | 'LVL_1' | 'LVL_2' | 'LVL_3'

export type TypeTank = TypeEnemyTank | TypePlayerTank

export type TypeGameBLock =
	| 'STONE'
	| 'BRICK'
	| 'WATER'
	| 'TREES'
	| 'ICE'
	| 'FLAG'

export type TypeBonus = 'GRENADE' | 'HELMET' | 'STAR' | 'HP' | 'TIMER'

export type TypeBang = 'BIG' | 'SMALL'

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
	id: string
	type: TypeObject
}

export interface Controls {
	pause: boolean
	fire: boolean
	move: TypeDirection | null
}

export type TypeShooter = 'PLAYER' | 'ENEMY'
export type TypeObject = TypeGameBLock | TypeBonus | TypeTank | 'BULLET'

export interface GameManager {
	[key: string]: Game
}

export interface EnemyList {
	type: TypeEnemyTank
	bonus?: TypeBonus
}

export interface Map {
	enemyList: EnemyList[]
	objects: GameObject[]
}
