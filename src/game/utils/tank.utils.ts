import { Bang, Bonus, Game, Tank } from '../instances'
import { TypeDirection } from '../types'
import { mutationFilter } from './array.utils'

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
	if (!enemy || (enemy.spawnAnimation && !initiatedByGrenade)) return false
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
	return true
}

export const generateNextMoves = () => {
	const randomVal = Math.floor(Math.random() * 4 + 1)
	let direction: TypeDirection
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
