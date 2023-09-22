import { Coordinates, TypeBonus, TypeEnemyTank, TypeGameBLock } from '.'
import { GameObject } from '../init'

export interface EnemyList {
	type: TypeEnemyTank
	bonus?: TypeBonus
}

export interface Map {
	enemyList: EnemyList[]
	objects: GameObject[]
}

export interface EditorObject extends Coordinates {
	type: TypeGameBLock
}
