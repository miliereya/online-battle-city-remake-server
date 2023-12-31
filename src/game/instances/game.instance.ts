import { GameObject } from './game-object.instance'
import { Player } from './player.instance'
import { Bullet } from './bullet.instance'
import {
	Controls,
	EditorObject,
	EnemyList,
	GameSettings,
	TypeEnemySpawnPosition,
} from '../types'
import { Bonus } from './bonus.instance'
import { Bang } from './bang.instance'
import { Tank } from './tank.instance'
import { generateBonuses } from '../utils'
import { getHardcoreList, maps as mapsBlank } from '../maps'
import { Map } from '../types'
import { EditorMap } from '../maps'

export class Game {
	id: string
	objects: GameObject[]
	isPaused = false
	p1: Player
	p2: Player
	bullets: Bullet[] = []
	enemies: Tank[] = []
	enemyList: EnemyList[] = []
	enemySpawnCooldown = 0
	enemySpawnPosition: TypeEnemySpawnPosition = 'middle'
	bonuses: Bonus[] = []
	timerBonus = 0
	isFlagAlive = true
	gameOverAnimation = 0
	levelEndDelay = 0
	bangs: Bang[] = []
	levelChangeAnimation = 110
	level = 1
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
		enemy_move: false,
	}
	editor?: EditorObject[]
	isEnded = false
	p1Controls: Controls = { fire: false, move: null, pause: false }
	p2Controls: Controls = { fire: false, move: null, pause: false }
	settings: GameSettings
	constructor(
		id: string,
		p1: string,
		p2: string,
		settings: GameSettings,
		editor?: EditorObject[]
	) {
		this.id = id
		this.settings = settings
		this.p1 = new Player(
			'left',
			p1,
			this.settings.playerLevel,
			this.settings.hardcore
		)
		this.p2 = new Player(
			'right',
			p2,
			this.settings.playerLevel,
			this.settings.hardcore
		)
		this.editor = editor
	}

	resetSounds() {
		this.sounds = {
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
			enemy_move: false,
		}
	}

	pause(controller: Controls) {
		if (controller.pause) {
			if (!this.isPaused) this.sounds.pause = true

			this.isPaused = !this.isPaused
			controller.pause = false
		}
	}

	nextLevel() {
		if (this.level === 11) {
			this.isEnded = true
			return
		}
		let map: Map
		if (this.editor) {
			map = EditorMap(this.editor)
			this.editor = undefined
		} else {
			const maps = JSON.parse(JSON.stringify(mapsBlank))
			map = maps['map' + this.level]
		}
		this.objects = map.objects
		this.bonuses = []
		this.bullets = []
		this.bangs = []
		this.enemies = []
		this.enemySpawnCooldown = 0
		this.enemySpawnPosition = 'middle'
		this.timerBonus = 0
		this.p1.reset()
		if (this.p2) this.p2.reset()
		this.enemyList = generateBonuses(
			this.settings.hardcore ? getHardcoreList() : map.enemyList
		)
		this.sounds.level_start = true
	}

	spawnEnemy(position: TypeEnemySpawnPosition) {
		this.enemySpawnCooldown = 100
		this.enemySpawnPosition =
			position === 'middle'
				? 'right'
				: position === 'right'
				? 'left'
				: 'middle'
		const newTank = this.enemyList.shift()
		this.enemies.push(
			new Tank(position, newTank.type, undefined, newTank.bonus)
		)
	}
}
