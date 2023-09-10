import { Bullet } from '../init/bullet.init'
import { Game } from '../init/game.init'
import { BusyCoordinates } from '../types'
import { addBlocksCoordinates } from '../utils/blocks.utils'
import {
	addTankCoordinates,
	addTanksCoordinates,
	getTankAvailableMoves,
} from '../utils/tank.utils'
import { moveTank } from './tank.logic'

export const playerFrameLogic = (game: Game, num: 1 | 2) => {
	const p = num === 1 ? game.p1 : game.p2
	const controller = num === 1 ? game.p1Controls : game.p2Controls
	const pAnother = num === 2 ? game.p1 : game.p2

	const { enemies, objects } = game

	if (p.spawnAnimation) {
		p.spawnAnimation--
	}

	if (controller.pause) {
		if (!game.isPaused) game.sounds.pause = true
		game.isPaused = !game.isPaused
		controller.pause = false
	}

	if (game.isPaused) return

	if (p.helmet !== 0) p.helmet--

	if (p.deathCooldown === 1) {
		p.type = 'LVL_0'
		p.direction = 'TOP'
		p.availableBullets = 1
		p.spawnAnimation = 50
		p.helmet = 120
		p.coordinateX = num === 1 ? 71 : 136
		p.coordinateY = 7
	}
	if (p.deathCooldown > 0) {
		p.deathCooldown -= 1
	}

	if (controller.fire) {
		controller.fire = false
		if (p.deathCooldown || p.availableBullets === 0 || p.spawnAnimation)
			return

		const y = p.coordinateY
		const x = p.coordinateX
		const direction = p.direction

		const bullet = new Bullet(x, y, direction, p.type, p.id)
		game.sounds.shoot = true
		game.bullets.push(bullet)
		p.availableBullets--
	}

	if (controller.move) {
		if (p.deathCooldown !== 0 || p.spawnAnimation) {
			controller.move = null
			return
		}

		const y = p.coordinateY
		const x = p.coordinateX
		const direction = p.direction

		const busyCoordinates: BusyCoordinates[] = []

		addBlocksCoordinates(objects, busyCoordinates)
		addTanksCoordinates([...enemies], busyCoordinates)
		if (pAnother.lives && !pAnother.deathCooldown) {
			addTankCoordinates(pAnother, busyCoordinates)
		}

		const availableMoves = getTankAvailableMoves(
			busyCoordinates,
			direction,
			x,
			y
		)

		moveTank(availableMoves, controller.move, p)
		game.sounds.player_move = true
		controller.move = null
	}
}
