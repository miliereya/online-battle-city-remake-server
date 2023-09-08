import { TypeBonus, TypeMoveButton, TypeTank } from '../types'
import { generateNextMoves, isEnemy } from '../utils/tank.utils'
import { Coordinates } from './coordinates.init'
import { v4 as uuid4 } from 'uuid'

interface nextMoves {
	direction: TypeMoveButton
	repeat: number
}

export class Tank extends Coordinates {
	id: string
	direction: TypeMoveButton
	tick: 1 | 2
	type: TypeTank
	speed: 1 | 2
	availableBullets: 0 | 1 | 2 | 3
	deathCooldown = 0
	spawnAnimation = 50
	lives: 0 | 1 | 2 | 3
	bonus?: TypeBonus
	nextMoves?: nextMoves
	constructor(
		side: 'left' | 'middle' | 'right',
		type: TypeTank,
		id?: string,
		bonus?: TypeBonus
	) {
		let x: number
		if (id) {
			x = side === 'left' ? 37 : 157
		} else {
			if (side === 'left') {
				x = 7
			} else if (side === 'middle') {
				x = 97
			} else {
				x = 200
			}
		}
		const y = id ? 7 : 200
		super(x, y)
		this.id = id ?? uuid4()
		this.direction = id ? 'TOP' : 'BOTTOM'
		this.tick = 1
		this.type = type
		this.speed = type === 'SPEEDY' ? 2 : 1
		this.lives = type === 'HEAVY' || id ? 3 : 1
		this.bonus = bonus
		if (type === 'LVL_2') {
			this.availableBullets = 2
		} else if (type === 'LVL_3') {
			this.availableBullets = 3
		} else {
			this.availableBullets = 1
		}
		if (isEnemy(type)) {
			this.nextMoves = generateNextMoves()
		}
	}
}

export class Player extends Tank {
	helmet = 120
	constructor(side: 'left' | 'right', id: string) {
		super(side, 'LVL_2', id)
	}
}
