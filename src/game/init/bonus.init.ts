import { TypeBonus } from '../types'
import { generateBonusCoordinates } from '../utils/bonus.utils'
import { Coordinates } from './coordinates.init'
import { v4 as uuid4 } from 'uuid'

export class Bonus extends Coordinates {
	id: string
	type: TypeBonus
	lifeTime: number = 300
	constructor(type: TypeBonus) {
		const { x, y } = generateBonusCoordinates()
		super(x, y)
		this.id = uuid4()
		this.type = type
	}
}
