import { TypeMoveButton, TypeTank } from '../types'
import { Coordinates } from './coordinates.init'
import { v4 as uuid4 } from 'uuid'

export class Tank extends Coordinates {
	id: string
	direction: TypeMoveButton
	tick: 1 | 2
	type: TypeTank
	speed: 1 | 2
	cooldown: number
	lives: 0 | 1 | 2 | 3
	constructor(side: 'left' | 'right', type: TypeTank, id?: string) {
		const x = id ? (side === 'left' ? 37 : 157) : side === 'left' ? 0 : 200
		const y = id ? 7 : 200
		super(x, y)
		this.id = id ?? uuid4()
		this.direction = id ? 'TOP' : 'BOTTOM'
		this.tick = 1
		this.cooldown = 0
		this.type = type
		this.speed = type === 'SPEEDY' ? 2 : 1
		this.lives = type === 'HEAVY' || id ? 3 : 1
	}
}

export class Player extends Tank {
	deathCooldown: number
	constructor(side: 'left' | 'right', id: string) {
		super(side, 'LVL_0', id)
		this.deathCooldown = 0
	}
}
