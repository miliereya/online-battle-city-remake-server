import { Bang } from '../init/bang.init'
import { Bullet } from '../init/bullet.init'
import { Game } from '../init/game.init'
import { BusyCoordinates } from '../types'
import { mutationFilter } from '../utils/array.utils'
import { addBlocksCoordinates, deleteBlock } from '../utils/blocks.utils'
import {
	addBulletsCoordinates,
	getBulletCoordinates,
} from '../utils/bullet.utils'
import {
	addTanksCoordinates,
	hitEnemy,
	isEnemy,
	killPlayer,
} from '../utils/tank.utils'

export const bulletsFrameLogic = (game: Game) => {
	const { bullets, objects, p1, p2, enemies } = game
	const busyCoordinates: BusyCoordinates[] = []
	const allTanks = [...enemies]
	if (p1.lives !== 0 || !p1.deathCooldown) {
		allTanks.push(p1)
	}
	if (p2.lives !== 0 || !p2.deathCooldown) {
		allTanks.push(p2)
	}
	addBlocksCoordinates(objects, busyCoordinates)
	addTanksCoordinates(allTanks, busyCoordinates)
	addBulletsCoordinates(busyCoordinates, bullets)

	for (let i = 0; i < bullets.length; i++) {
		let willHit = false

		for (let l = bullets[i].speed + 1; l !== 0; l--) {
			const bullet = bullets[i]
			if (!bullet || willHit) break
			const {
				coordinateX: x,
				coordinateY: y,
				direction,
				shooter,
				shooterId,
				level,
			} = bullet
			const bulletCoordinates = getBulletCoordinates(bullet)

			for (let i = 0; i < bulletCoordinates.length; i++) {
				if (!bullet || willHit) break

				const { coordinateX: bulletX, coordinateY: bulletY } =
					bulletCoordinates[i]
				for (let l = 0; l < busyCoordinates.length; l++) {
					if (!bullet || willHit) break

					const {
						coordinateX: busyX,
						coordinateY: busyY,
						id,
						type,
					} = busyCoordinates[l]

					if (busyX === bulletX && busyY === bulletY) {
						if (type === 'BRICK') {
							deleteBlock(id, game.objects)
							if (!isEnemy(shooter)) game.sounds.hit_1 = true
							willHit = true
						}
						if (type === 'STONE') {
							if (level > 1) {
								deleteBlock(id, game.objects)
								game.sounds.hit_1 = true
							} else {
								game.sounds.heavy_hit = true
							}
							willHit = true
						}
						if (
							type === 'LVL_0' ||
							type === 'LVL_1' ||
							type === 'LVL_2' ||
							type === 'LVL_3'
						) {
							if (isEnemy(shooter)) {
								killPlayer(id, game)
							}
							if (id !== shooterId) willHit = true
						}
						if (
							type === 'NORMAL' ||
							type === 'SPEEDY' ||
							type === 'HEAVY'
						) {
							if (id !== shooterId) {
								willHit = true
							}
							if (!isEnemy(shooter)) {
								hitEnemy(id, game)
								willHit = true
							}
						}

						if (type === 'FLAG' && game.isFlagAlive) {
							game.isFlagAlive = false
							game.sounds.flag_bang = true
							willHit = true
						}

						if (type === 'BULLET' && id !== bullet.id) {
							willHit = true
							mutationFilter(bullets, (b: Bullet) => b.id !== id)
						}
					}
				}
			}
			if (!willHit) {
				switch (direction) {
					case 'TOP':
						if (y > 204) {
							willHit = true
							if (!isEnemy(shooter)) game.sounds.heavy_hit = true
						} else {
							bullet.coordinateY += 1
						}
						break
					case 'BOTTOM':
						if (y < 2) {
							willHit = true
							if (!isEnemy(shooter)) game.sounds.heavy_hit = true
						} else {
							bullet.coordinateY -= 1
						}
						break
					case 'RIGHT':
						if (x > 204) {
							willHit = true
							if (!isEnemy(shooter)) game.sounds.heavy_hit = true
						} else {
							bullet.coordinateX += 1
						}
						break
					default:
						if (x < 3) {
							willHit = true
							if (!isEnemy(shooter)) game.sounds.heavy_hit = true
						} else {
							bullet.coordinateX -= 1
						}
						break
				}
			}
			if (willHit) {
				mutationFilter(bullets, (b: Bullet) => b.id !== bullet.id)
				game.bangs.push(new Bang('SMALL', x, y))
				const tank = allTanks.find((t) => t.id === shooterId)
				if (tank)
					if (tank.type !== 'LVL_0') {
						tank.availableBullets++
					} else {
						if (tank.availableBullets === 0) {
							tank.availableBullets++
						}
					}
			}
		}
	}
}
