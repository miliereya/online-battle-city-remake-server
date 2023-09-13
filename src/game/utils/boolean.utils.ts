import { Game, Player } from '../init'
import { TypeObject, TypeTank } from '../types'

export const isEnemy = (type: TypeTank | TypeObject) =>
	type === 'NORMAL' || type === 'SPEEDY' || type === 'HEAVY' ? true : false

export const isPlayer = (type: TypeTank | TypeObject) =>
	type === 'LVL_0' || type === 'LVL_1' || type === 'LVL_2' || type === 'LVL_3'
		? true
		: false

export const isImpassibleGameObject = (type: TypeTank | TypeObject) =>
	type === 'BRICK' || type === 'WATER' || type === 'STONE' || type === 'FLAG'
		? true
		: false

export const isTank = (type: TypeTank | TypeObject) =>
	isEnemy(type) || isPlayer(type) ? true : false

export const isPlayerDead = (p: Player) =>
	p.lives && !p.deathCooldown ? false : true

export const isGameOver = (game: Game) => {
	const { p1, p2, isFlagAlive } = game
	return (!game.gameOverAnimation && !p1.lives && !p2.lives) ||
		(!isFlagAlive && !game.gameOverAnimation)
		? true
		: false
}

export const isPlayerCanShoot = (p: Player) =>
	p.deathCooldown || !p.availableBullets || p.spawnAnimation ? false : true

export const isPlayerCanMove = (p: Player) =>
	p.deathCooldown || p.spawnAnimation ? false : true
