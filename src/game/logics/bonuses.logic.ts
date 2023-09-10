import { Game } from '../init/game.init'
import { Player } from '../init/player.init'
import { BusyCoordinates } from '../types'
import { deleteBonus, getBonusCoordinates } from '../utils/bonus.utils'
import { isAnyCoordinatesMatches } from '../utils/coordinates.utils'
import { addTankCoordinates, hitEnemy } from '../utils/tank.utils'

export const bonusesFrameLogic = (game: Game) => {
	const { bonuses, p1, p2, enemies } = game
	for (let i = 0; i < bonuses.length; i++) {
		const bonus = bonuses[i]
		const { lifeTime, type, id } = bonus
		if (lifeTime === 0) {
			deleteBonus(id, bonuses)
			continue
		}
		let p: null | Player = null
		const bonusCoordinates = getBonusCoordinates(bonus)
		const p1Coordinates: BusyCoordinates[] = []
		const p2Coordinates: BusyCoordinates[] = []
		addTankCoordinates(p1, p1Coordinates)
		addTankCoordinates(p2, p2Coordinates)
		if (isAnyCoordinatesMatches(p1Coordinates, bonusCoordinates)) {
			p = p1
		} else if (isAnyCoordinatesMatches(p2Coordinates, bonusCoordinates)) {
			p = p2
		}
		if (p) {
			game.sounds.bonus_pickup = true
			switch (type) {
				case 'STAR':
					switch (p.type) {
						case 'LVL_0':
							p.type = 'LVL_1'
							break
						case 'LVL_1':
							p.type = 'LVL_2'
							p.availableBullets++
							break
						case 'LVL_2':
							p.type = 'LVL_3'
							p.availableBullets++
					}
					break
				case 'HP':
					if (p.lives < 3) p.lives++
					break
				case 'GRENADE':
					while (enemies.length) {
						hitEnemy(enemies[0].id, game)
					}
					break
				case 'HELMET':
					p.helmet = 200
					break
				case 'TIMER':
					game.timerBonus = 200
					break
			}
			deleteBonus(id, bonuses)
		} else {
			bonus.lifeTime--
		}
	}
}
