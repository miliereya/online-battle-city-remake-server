import { v4 as uuid4 } from 'uuid'
import { Cell, TypeGameBLock } from '../types'
import { Coordinates } from './coordinates.init'

export class GameObject extends Coordinates {
	id: string
	type: TypeGameBLock
	constructor(type: TypeGameBLock, x: Cell | number, y: Cell | number) {
		super(x * 8, y * 8)
		this.id = uuid4()
		this.type = type
	}
}
