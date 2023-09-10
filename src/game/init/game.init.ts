import { GameObject } from './game-object.init'
import { Player, Tank } from './player.init'
import { Bullet } from './bullet.init'
import { Controls, EnemyList } from '../types'
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
	gameOverAnimation = 0
	levelEndDelay = 0
	bangs: Bang[] = []
	levelChangeAnimation = 110
	level: number
	sounds = {
		heavy_hit: false,
		pause: false,
		level_start: false,
		bang: false,
		flag_bang: false,
		game_over: false,
		shoot: false,
		hit_1: false,
		bonus_spawn: false,
		bonus_pickup: false,
		player_move: false,
	}
	isEnded = false
	p1Controls: Controls = { fire: false, move: null, pause: false }
	p2Controls: Controls = { fire: false, move: null, pause: false }
	constructor(id: string, p1: string, p2: string) {
		this.id = id
		this.isPaused = false
		this.p1 = new Player('left', p1)
		this.p2 = new Player('right', p2)
		this.level = 1
	}
}
