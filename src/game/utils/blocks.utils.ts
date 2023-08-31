import { GameObject } from '../init/game-object.init'
import { BusyCoordinates } from '../types'
import { getSideCoordinates } from './coordinates.utils'

export const getBlocksSideCoordinates = (
	gameObjects: GameObject[],
	busyCoordinates: BusyCoordinates[]
) => {
	for (let i = 0; i < gameObjects.length; i++) {
		const obj = gameObjects[i]
		getSideCoordinates(busyCoordinates, 8, obj, { byI: '+' })
		getSideCoordinates(
			busyCoordinates,
			8,
			obj,
			{ byI: '+' },
			{ extraCalc: '+7' }
		)
		getSideCoordinates(busyCoordinates, 8, obj, undefined, {
			byI: '+',
		})
		getSideCoordinates(
			busyCoordinates,
			8,
			obj,
			{ extraCalc: '+7' },
			{
				byI: '+',
			}
		)
	}
}
