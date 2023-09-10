import { Bang } from '../init/bang.init'
import { Bonus } from '../init/bonus.init'
import { Game } from '../init/game.init'
import { Player, Tank } from '../init/player.init'
import {
	AvailableMoves,
	BusyCoordinates,
	TypeMoveButton,
	TypeTank,
} from '../types'
import { mutationFilter } from './array.utils'
import { getSideCoordinates } from './coordinates.utils'

export const addTankCoordinates = (
	tank: Tank,
	busyCoordinates: BusyCoordinates[]
) => {
	if (tank.deathCooldown) return
	getSideCoordinates(
		busyCoordinates,
		15,
		tank,
		{ byI: '+', extraCalc: '-7' },
		{ extraCalc: '-7' }
	)
	getSideCoordinates(
		busyCoordinates,
		15,
		tank,
		{ byI: '+', extraCalc: '-7' },
		{ extraCalc: '+7' }
	)
	getSideCoordinates(
		busyCoordinates,
		15,
		tank,
		{ extraCalc: '-7' },
		{ byI: '+', extraCalc: '-7' }
	)
	getSideCoordinates(
		busyCoordinates,
		15,
		tank,
		{ extraCalc: '+7' },
		{ byI: '+', extraCalc: '-7' }
	)
}

export const addTanksCoordinates = (
	tanks: Tank[],
	busyCoordinates: BusyCoordinates[]
) => {
	for (let i = 0; i < tanks.length; i++) {
		if (tanks[i].lives === 0) return
		addTankCoordinates(tanks[i], busyCoordinates)
	}
}

export const killPlayer = (id: string, game: Game) => {
	const p = game.p1.id === id ? game.p1 : game.p2
	if (p.helmet) return
	p.lives -= 1
	p.deathCooldown = 100
	game.sounds.bang = true
	game.bangs.push(new Bang('BIG', p.coordinateX, p.coordinateY))
}

export const hitEnemy = (
	id: string,
	game: Game,
	initiatedByGrenade = false
) => {
	const enemy = game.enemies.find((e: Tank) => e.id === id)
	if (!enemy) return
	enemy.lives--
	if (enemy.lives === 0) {
		if (game.enemies.length > 2 && game.enemySpawnCooldown > 20)
			game.enemySpawnCooldown = 20
		if (enemy.bonus) {
			game.bonuses.push(new Bonus(enemy.bonus))
			game.sounds.bonus_spawn = true
		} else {
			game.sounds.bang = true
		}
		game.bangs.push(new Bang('BIG', enemy.coordinateX, enemy.coordinateY))
		mutationFilter(game.enemies, (e: Tank) => e.id !== id)
	} else {
		if (!initiatedByGrenade) {
			game.sounds.heavy_hit = true
		}
	}
}

export const generateNextMoves = () => {
	const randomVal = Math.floor(Math.random() * 4 + 1)
	let direction: TypeMoveButton
	switch (randomVal) {
		case 1:
			direction = 'TOP'
			break
		case 2:
			direction = 'BOTTOM'
			break
		case 3:
			direction = 'LEFT'
			break
		default:
			direction = 'RIGHT'
			break
	}
	return {
		repeat: Math.floor(Math.random() * 20 + 10),
		direction,
	}
}

export const getTankPosition = (tank: Tank) => ({
	y: tank.coordinateY,
	x: tank.coordinateX,
	direction: tank.direction,
})

export const isEnemy = (type: TypeTank) => {
	return type === 'NORMAL' || type === 'SPEEDY' || type === 'HEAVY'
		? true
		: false
}

export const isPlayerAlive = (p: Player) => {
	return p.lives && !p.deathCooldown ? true : false
}

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
