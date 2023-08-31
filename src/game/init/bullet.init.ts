import { v4 as uuid4 } from 'uuid'
import { TypeMoveButton, TypeShooter } from '../types'
import { Coordinates } from './coordinates.init'

export class Bullet extends Coordinates {
	direction: TypeMoveButton
	id: string
	shooter: TypeShooter
	level: 1 | 2
	constructor(
		x: number,
		y: number,
		direction: TypeMoveButton,
		shooter: TypeShooter,
		level: 1 | 2
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
		this.level = level
		this.shooter = shooter
	}
}
