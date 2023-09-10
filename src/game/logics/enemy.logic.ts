import { Bullet } from '../init/bullet.init'
import { Game } from '../init/game.init'
import { Tank } from '../init/player.init'
import { BusyCoordinates } from '../types'
import { addBlocksCoordinates } from '../utils/blocks.utils'
import { isAnyCoordinatesMatches } from '../utils/coordinates.utils'
import {
	addTankCoordinates,
	addTanksCoordinates,
	generateNextMoves,
	getTankAvailableMoves,
} from '../utils/tank.utils'
import { moveTank } from './tank.logic'

export const enemiesSpawnLogic = (game: Game) => {
	const {
		enemies,
		enemyList,
		enemySpawnCooldown,
		p1,
		p2,
		enemySpawnPosition,
	} = game
	if (enemies.length === 4 || enemyList.length === 0) return
	if (enemySpawnCooldown !== 0) {
		game.enemySpawnCooldown--
		return
	}

	const x = {
		left: 0,
		middle: 97,
		right: 200,
	}

	const y = 200

	const busyCoordinates: BusyCoordinates[] = []
	addTanksCoordinates(enemies, busyCoordinates)
	addTankCoordinates(p1, busyCoordinates)
	addTankCoordinates(p2, busyCoordinates)

	const middleCoordinates: BusyCoordinates[] = []
	addTankCoordinates(
		{
			coordinateX: x.middle,
			coordinateY: y,
			id: 'middle',
			type: 'NORMAL',
		} as Tank,
		middleCoordinates
	)

	const isMiddleCoordinatesMatches = isAnyCoordinatesMatches(
		middleCoordinates,
		busyCoordinates
	)

	if (enemySpawnPosition === 1 && !isMiddleCoordinatesMatches) {
		const newTank = game.enemyList.shift()
		enemies.push(new Tank('middle', newTank.type, undefined, newTank.bonus))
		game.enemySpawnCooldown = 100
		game.enemySpawnPosition = 2
		return
	}

	const rightCoordinates: BusyCoordinates[] = []
	addTankCoordinates(
		{
			coordinateX: x.right,
			coordinateY: y,
			id: 'right',
			type: 'NORMAL',
		} as Tank,
		rightCoordinates
	)

	const isRightCoordinatesMatches = isAnyCoordinatesMatches(
		rightCoordinates,
		busyCoordinates
	)

	if (enemySpawnPosition === 2 && !isRightCoordinatesMatches) {
		const newTank = game.enemyList.shift()
		enemies.push(new Tank('right', newTank.type, undefined, newTank.bonus))
		game.enemySpawnCooldown = 100
		game.enemySpawnPosition = 3
		return
	}
	const leftCoordinates: BusyCoordinates[] = []
	addTankCoordinates(
		{
			coordinateX: x.left,
			coordinateY: y,
			id: 'left',
			type: 'NORMAL',
		} as Tank,
		leftCoordinates
	)

	const isLeftCoordinatesMatches = isAnyCoordinatesMatches(
		leftCoordinates,
		busyCoordinates
	)

	if (enemySpawnPosition === 3 && !isLeftCoordinatesMatches) {
		const newTank = game.enemyList.shift()
		enemies.push(new Tank('left', newTank.type, undefined, newTank.bonus))
		game.enemySpawnCooldown = 100
		game.enemySpawnPosition = 1
		return
	}

	if (!isMiddleCoordinatesMatches) {
		const newTank = game.enemyList.shift()
		enemies.push(new Tank('middle', newTank.type, undefined, newTank.bonus))
		game.enemySpawnCooldown = 100
		game.enemySpawnPosition = 2
		return
	}

	if (!isRightCoordinatesMatches) {
		const newTank = game.enemyList.shift()
		enemies.push(new Tank('right', newTank.type, undefined, newTank.bonus))
		game.enemySpawnCooldown = 100
		game.enemySpawnPosition = 3
		return
	}

	if (!isLeftCoordinatesMatches) {
		const newTank = game.enemyList.shift()
		enemies.push(new Tank('left', newTank.type, undefined, newTank.bonus))
		game.enemySpawnCooldown = 100
		game.enemySpawnPosition = 1
		return
	}
}

export const enemiesFrameLogic = (game: Game) => {
	const { enemies, p1, p2, objects, timerBonus } = game

	if (timerBonus) return

	for (let i = 0; i < enemies.length; i++) {
		const enemy = enemies[i]
		if (enemy.spawnAnimation) {
			enemy.spawnAnimation--
			continue
		}
		for (let l = enemy.type === 'SPEEDY' ? 2 : 1; l > 0; l--) {
			const {
				nextMoves,
				coordinateX: x,
				coordinateY: y,
				direction,
				id,
			} = enemy
			const busyCoordinates: BusyCoordinates[] = []
			addTanksCoordinates([...enemies], busyCoordinates)

			if (p1.lives !== 0 || !p1.deathCooldown) {
				addTankCoordinates(p1, busyCoordinates)
			}
			if (p2.lives !== 0 || !p2.deathCooldown) {
				addTankCoordinates(p2, busyCoordinates)
			}

			const enemyCoordinates: BusyCoordinates[] = []
			addTankCoordinates(enemy, enemyCoordinates)

			addBlocksCoordinates(objects, busyCoordinates)
			addTanksCoordinates(
				[...enemies.filter((e) => e.id !== id), p1, p2],
				busyCoordinates
			)

			const availableMoves = getTankAvailableMoves(
				busyCoordinates,
				direction,
				x,
				y
			)

			moveTank(availableMoves, nextMoves.direction, enemy)
			nextMoves.repeat--
			if (nextMoves.repeat === 1) {
				enemy.nextMoves = generateNextMoves()
			}
		}
		if (enemy.type === 'SPEEDY') {
			enemy.tick = enemy.tick === 1 ? 2 : 1
		}
		const {
			coordinateX: x,
			coordinateY: y,
			direction,
			availableBullets,
		} = enemy
		if (
			availableBullets !== 0 &&
			Math.floor(Math.random() * 18 + 1) === 1
		) {
			const bullet = new Bullet(x, y, direction, enemy.type, enemy.id)
			game.bullets.push(bullet)
			enemy.availableBullets--
		}
	}
}
