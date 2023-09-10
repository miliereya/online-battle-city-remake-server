import { EnemyList1 } from '../enemies-list/easy.enemy-list'
import { GameObject } from '../init/game-object.init'
import { Map } from '../types'

export const Map3 = (): Map => ({
	objects: [
		new GameObject('FLAG', 12, 0),
		new GameObject('FLAG', 12, 1),
		new GameObject('FLAG', 13, 0),
		new GameObject('FLAG', 13, 1),
		new GameObject('BRICK', 11, 2),
		new GameObject('BRICK', 12, 2),
		new GameObject('BRICK', 13, 2),
		new GameObject('BRICK', 14, 2),
		new GameObject('BRICK', 11, 0),
		new GameObject('BRICK', 11, 1),
		new GameObject('BRICK', 14, 0),
		new GameObject('BRICK', 14, 1),
		new GameObject('BRICK', 10, 4),
		new GameObject('BRICK', 10, 5),
		new GameObject('BRICK', 11, 4),
		new GameObject('BRICK', 11, 5),
		new GameObject('WATER', 12, 4),
		new GameObject('WATER', 12, 5),
		new GameObject('WATER', 13, 4),
		new GameObject('WATER', 13, 5),
		new GameObject('STONE', 14, 4),
		new GameObject('STONE', 14, 5),
		new GameObject('STONE', 15, 4),
		new GameObject('STONE', 15, 5),
	],
	enemyList: [...EnemyList1],
})