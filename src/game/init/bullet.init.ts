import { v4 as uuid4 } from 'uuid'
import { TypeMoveButton, TypeTank } from '../types'
import { Coordinates } from './coordinates.init'

export class Bullet extends Coordinates {
	direction: TypeMoveButton
	id: string
	shooter: TypeTank
	level: 1 | 2
	shooterId: string
	speed: 1 | 2 | 3
	constructor(
		x: number,
		y: number,
		direction: TypeMoveButton,
		shooter: TypeTank,
		shooterId: string
	) {
		switch (direction) {
			case 'TOP':
				y += 9
				break
			case 'BOTTOM':
				y -= 9
				break
			case 'LEFT':
				x -= 9
				break
			default:
				x += 9
		}
		super(x, y)
		this.id = uuid4()
		this.direction = direction
		this.shooter = shooter
		this.shooterId = shooterId
		if (
			shooter === 'NORMAL' ||
			shooter === 'SPEEDY' ||
			shooter === 'HEAVY' ||
			shooter === 'LVL_0'
		) {
			this.speed = 1
		} else if (shooter === 'LVL_1') {
			this.speed = 2
		} else {
			this.speed = 3
		}
		if (shooter === 'LVL_3') {
			this.level = 2
		} else {
			this.level = 1
		}
	}
}
