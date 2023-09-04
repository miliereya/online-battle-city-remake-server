import { Bullet } from '../init/bullet.init'
import { BusyCoordinates } from '../types'
import { getSideCoordinates } from './coordinates.utils'

export const getBulletCoordinates = (bullet: Bullet) => {
	const { coordinateX: x, coordinateY: y, direction, id } = bullet
	let bulletCoordinates: BusyCoordinates[] = []
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
				{ id, type: 'BULLET', coordinateX: x, coordinateY: y + 2 },
				...bulletCoordinates,
			]
			break
		case 'BOTTOM':
			bulletCoordinates = [
				{ id, type: 'BULLET', coordinateX: x, coordinateY: y - 2 },
				...bulletCoordinates,
			]
			break
		case 'LEFT':
			bulletCoordinates = [
				{ id, type: 'BULLET', coordinateX: x - 2, coordinateY: y },
				...bulletCoordinates,
			]
			break
		default:
			bulletCoordinates = [
				{ id, type: 'BULLET', coordinateX: x + 2, coordinateY: y },
				...bulletCoordinates,
			]
	}
	return bulletCoordinates
}

export const addBulletsCoordinates = (
	busyCoordinates: BusyCoordinates[],
	bullets: Bullet[]
) => {
	for (let i = 0; i < bullets.length; i++) {
		busyCoordinates.push(...getBulletCoordinates(bullets[i]))
	}
}
