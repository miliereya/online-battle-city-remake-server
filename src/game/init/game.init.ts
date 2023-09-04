import { GameObject } from './game-object.init'
import { Player, Tank } from './player.init'
import { Bullet } from './bullet.init'
import { Controls, EnemyList, Map } from '../types'
import { generateBonuses } from '../utils/bonus.utils'

export class Game {
	id: string
	objects: GameObject[]
	isPaused: boolean = false
	p1: Player
	p2: Player
	bullets: Bullet[] = []
	enemies: Tank[]
	enemyList: EnemyList[]
	enemySpawnCooldown = 0
	enemySpawnPosition: 1 | 2 | 3 = 1
	p1Controls: Controls = { fire: false, move: null, pause: false }
	p2Controls: Controls = { fire: false, move: null, pause: false }
	constructor(id: string, map: Map, p1: string, p2: string) {
		this.id = id
		this.isPaused = false
		this.objects = map.objects
		this.enemyList = generateBonuses(map.enemyList)
		this.enemies = []
		this.p1 = new Player('left', p1)
		this.p2 = new Player('right', p2)
	}
}
