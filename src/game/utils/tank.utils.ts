import { Player, Tank } from '../init/player.init'
import { AvailableMoves, BusyCoordinates, TypeMoveButton } from '../types'
import { getSideCoordinates } from './coordinates.utils'

export const getAnotherPLayerCoordinates = (
	player: Player,
	busyCoordinates: BusyCoordinates[]
) => {
	getSideCoordinates(
		busyCoordinates,
		15,
		player,
		{ byI: '+', extraCalc: '-7' },
		{ extraCalc: '-7' }
	)
	getSideCoordinates(
		busyCoordinates,
		15,
		player,
		{ byI: '+', extraCalc: '-7' },
		{ extraCalc: '+7' }
	)
	getSideCoordinates(
		busyCoordinates,
		15,
		player,
		{ extraCalc: '-7' },
		{ byI: '+', extraCalc: '-7' }
	)
	getSideCoordinates(
		busyCoordinates,
		15,
		player,
		{ extraCalc: '+7' },
		{ byI: '+', extraCalc: '-7' }
	)
}

export const getTankPosition = (tank: Tank) => ({
	y: tank.coordinateY,
	x: tank.coordinateX,
	direction: tank.direction,
})

export const getTankAvailableMoves = (
	busyCoordinates: BusyCoordinates[],
	direction: TypeMoveButton,
	x: number,
	y: number
): AvailableMoves => {
	const availableMoves = {
		top: y < 200 && direction === 'TOP',
		bottom: y > 7 && direction === 'BOTTOM',
		right: x < 200 && direction === 'RIGHT',
		left: x > 7 && direction === 'LEFT',
	}
	for (let i = 0; i < busyCoordinates.length; i++) {
		const coX = busyCoordinates[i].coordinateX
		const coY = busyCoordinates[i].coordinateY
		if (availableMoves.top && coY === y + 8 && coX > x - 8 && coX < x + 8) {
			availableMoves.top = false
			continue
		}
		if (
			availableMoves.bottom &&
			coY === y - 8 &&
			coX > x - 8 &&
			coX < x + 8
		) {
			availableMoves.bottom = false
			continue
		}
		if (
			availableMoves.right &&
			coX === x + 8 &&
			coY > y - 8 &&
			coY < y + 8
		) {
			availableMoves.right = false
			continue
		}
		if (
			availableMoves.left &&
			coX === x - 8 &&
			coY > y - 8 &&
			coY < y + 8
		) {
			availableMoves.left = false
			continue
		}
	}
	return availableMoves
}