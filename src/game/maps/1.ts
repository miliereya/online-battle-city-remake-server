import { EnemyListEasy } from '../enemies-list/easy.enemy-list'
import { GameObject } from '../init/game-object.init'
import { Map } from '../types'

export const Map1: Map = {
	objects: [
		new GameObject('BRICK', 10, 2),
		new GameObject('BRICK', 10, 3),
		new GameObject('BRICK', 11, 2),
		new GameObject('BRICK', 11, 3),
		new GameObject('WATER', 12, 2),
		new GameObject('WATER', 12, 3),
		new GameObject('WATER', 13, 2),
		new GameObject('WATER', 13, 3),
		new GameObject('STONE', 14, 2),
		new GameObject('STONE', 14, 3),
		new GameObject('STONE', 15, 2),
		new GameObject('STONE', 15, 3),
		new GameObject('TREES', 16, 2),
		new GameObject('TREES', 16, 3),
		new GameObject('TREES', 17, 2),
		new GameObject('TREES', 17, 3),
	],
	enemyList: EnemyListEasy,
}
