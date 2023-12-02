import { Game } from '../instances'
import { isPlayerCanMove, isPlayerCanShoot, isPlayerDead } from '../utils'

const playerFrameLogic = (game: Game, num: 1 | 2) => {
	const p = num === 1 ? game.p1 : game.p2
	const controller = num === 1 ? game.p1Controls : game.p2Controls
	const pAnother = num === 2 ? game.p1 : game.p2

	const { enemies, objects, isPaused, sounds, bullets } = game
	const { fire, move, pause } = controller
	const { spawnAnimation, helmet, deathCooldown, direction } = p

	if (spawnAnimation) p.spawnAnimation--

	if (pause) game.pause(controller)

	if (isPaused) return

	if (helmet !== 0) p.helmet--

	if (deathCooldown === 1) p.respawn()

	if (deathCooldown > 0) p.deathCooldown -= 1

	if (fire) {
		controller.fire = false

		if (!isPlayerCanShoot(p)) return

		sounds.shoot = true
		p.shoot(bullets)
	}

	if (move) {
		if (!isPlayerCanMove(p)) {
			controller.move = null
			return
		}

		if (move !== direction) {
			p.direction = move
		} else {
			const busyCoordinates = [...enemies, ...objects]
			if (!isPlayerDead(pAnother)) busyCoordinates.push(pAnother)
			p.move(busyCoordinates)
		}
		sounds.player_move = true
		controller.move = null
	}
}

export const playersFrameLogic = (game: Game) => {
	playerFrameLogic(game, 1)
	playerFrameLogic(game, 2)
}
