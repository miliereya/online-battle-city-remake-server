import { GameObject } from './game-object.init'
import { Player, Tank } from './player.init'
import { Bullet } from './bullet.init'
import { Controls, EnemyList, Map } from '../types'
import { generateBonuses } from '../utils/bonus.utils'
import { Bonus } from './bonus.init'
import { Bang } from './bang.init'

export class Game {
	id: string
	objects: GameObject[]
	isPaused: boolean = false
	p1: Player
	p2: Player
	bullets: Bullet[] = []
	enemies: Tank[] = []
	enemyList: EnemyList[]
	enemySpawnCooldown = 0
	enemySpawnPosition: 1 | 2 | 3 = 1
	bonuses: Bonus[] = []
	timerBonus = 0
	isFlagAlive = true
	bangs: Bang[] = []
	p1Controls: Controls = { fire: false, move: null, pause: false }
	p2Controls: Controls = { fire: false, move: null, pause: false }
	constructor(id: string, map: Map, p1: string, p2: string) {
		this.id = id
		this.isPaused = false
		this.objects = map.objects
		this.enemyList = generateBonuses(map.enemyList)
		this.p1 = new Player('left', p1)
		this.p2 = new Player('right', p2)
	}
}
