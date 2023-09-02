import { Bullet } from '../init/bullet.init'
import { Game } from '../init/game.init'
import { BusyCoordinates } from '../types'
import { mutationFilter } from '../utils/array.utils'
import { addBlocksCoordinates, deleteBlock } from '../utils/blocks.utils'
import { getBulletCoordinates } from '../utils/bullet.utils'
import { addTanksCoordinates, killPlayer } from '../utils/tank.utils'

export const bulletsFrameLogic = (game: Game) => {
	const { bullets, objects, p1, p2 } = game
	const busyCoordinates: BusyCoordinates[] = []
	addBlocksCoordinates(objects, busyCoordinates)
	addTanksCoordinates([p1, p2], busyCoordinates)

	for (let i = 0; i < bullets.length; i++) {
		const bullet = bullets[i]
		const {
			coordinateX: x,
			coordinateY: y,
			direction,
			shooter,
			level,
		} = bullet
		const bulletCoordinates = getBulletCoordinates(bullet)

		let willHit = false

		for (let i = 0; i < bulletCoordinates.length; i++) {
			const { coordinateX: bulletX, coordinateY: bulletY } =
				bulletCoordinates[i]
			for (let l = 0; l < busyCoordinates.length; l++) {
				const {
					coordinateX: busyX,
					coordinateY: busyY,
					id,
					type,
				} = busyCoordinates[l]

				if (busyX === bulletX && busyY === bulletY) {
					if (type === 'BRICK') {
						deleteBlock(id, game.objects)
						willHit = true
					}
					if (type === 'STONE') {
						if (level === 2) {
							deleteBlock(id, game.objects)
						}
						willHit = true
					}
					if (
						type === 'LVL_0' ||
						type === 'LVL_1' ||
						type === 'LVL_2' ||
						type === 'LVL_3'
					) {
						if (shooter === 'ENEMY') {
							killPlayer(id, game)
						}
						willHit = true
					}
				}
			}
		}
		if (!willHit) {
			switch (direction) {
				case 'TOP':
					if (y > 204) {
						willHit = true
					} else {
						bullet.coordinateY += 1
					}
					break
				case 'BOTTOM':
					if (y < 2) {
						willHit = true
					} else {
						bullet.coordinateY -= 1
					}
					break
				case 'RIGHT':
					if (x > 204) {
						willHit = true
					} else {
						bullet.coordinateX += 1
					}
					break
				default:
					if (x < 3) {
						willHit = true
					} else {
						bullet.coordinateX -= 1
					}
					break
			}
		}
		if (willHit) {
			mutationFilter(bullets, (b: Bullet) => b.id !== bullet.id)
		}
	}
}
