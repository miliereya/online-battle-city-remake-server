import { Bullet } from '../init/bullet.init'
import { Coordinates } from '../types'
import { getSideCoordinates } from './coordinates.utils'

export const getBulletCoordinates = (bullet: Bullet): Coordinates[] => {
	const { coordinateX: x, coordinateY: y, direction } = bullet
	let bulletCoordinates: Coordinates[] = []
	getSideCoordinates(
		bulletCoordinates,
		3,
		bullet,
		{
			extraCalc: '-1',
			byI: '+',
		},
		{ extraCalc: '-1' }
	)
	getSideCoordinates(
		bulletCoordinates,
		3,
		bullet,
		{
			extraCalc: '-1',
			byI: '+',
		},
		{ extraCalc: '+1' }
	)
	getSideCoordinates(
		bulletCoordinates,
		3,
		bullet,
		{ extraCalc: '+1' },
		{
			extraCalc: '-1',
			byI: '+',
		}
	)
	getSideCoordinates(
		bulletCoordinates,
		3,
		bullet,
		{ extraCalc: '-1' },
		{
			extraCalc: '-1',
			byI: '+',
		}
	)
	switch (direction) {
		case 'TOP':
			bulletCoordinates = [
				{
					coordinateX: x,
					coordinateY: y + 2,
				},
				...bulletCoordinates,
			]
			break
		case 'BOTTOM':
			bulletCoordinates = [
				{
					coordinateX: x,
					coordinateY: y - 2,
				},
				...bulletCoordinates,
			]
			break
		case 'LEFT':
			bulletCoordinates = [
				{
					coordinateX: x - 2,
					coordinateY: y,
				},
				...bulletCoordinates,
			]
			break
		default:
			bulletCoordinates = [
				{
					coordinateX: x + 2,
					coordinateY: y,
				},
				...bulletCoordinates,
			]
	}
	return bulletCoordinates
}
