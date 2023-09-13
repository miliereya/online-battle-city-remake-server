import { Tank } from '../init/tank.init'
import { AvailableMoves, TypeButton } from '../types'

export const moveTank = (
	availableMoves: AvailableMoves,
	button: TypeButton,
	tank: Tank
) => {
	switch (button) {
		case 'TOP':
			if (availableMoves.top) {
				tank.coordinateY += 1
				if (tank.type !== 'SPEEDY') tank.tick = tank.tick === 1 ? 2 : 1
			} else {
				tank.direction = 'TOP'
			}
			break

		case 'BOTTOM':
			if (availableMoves.bottom) {
				tank.coordinateY -= 1
				if (tank.type !== 'SPEEDY') tank.tick = tank.tick === 1 ? 2 : 1
			} else {
				tank.direction = 'BOTTOM'
			}
			break

		case 'RIGHT':
			if (availableMoves.right) {
				tank.coordinateX += 1
				if (tank.type !== 'SPEEDY') tank.tick = tank.tick === 1 ? 2 : 1
			} else {
				tank.direction = 'RIGHT'
			}
			break

		default:
			if (availableMoves.left) {
				tank.coordinateX -= 1
				if (tank.type !== 'SPEEDY') tank.tick = tank.tick === 1 ? 2 : 1
			} else {
				tank.direction = 'LEFT'
			}
	}
}
