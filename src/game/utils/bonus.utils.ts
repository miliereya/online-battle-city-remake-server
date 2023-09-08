import { Bonus } from '../init/bonus.init'
import { BusyCoordinates, EnemyList } from '../types'
import { mutationFilter } from './array.utils'
import { getSideCoordinates } from './coordinates.utils'

export const generateBonuses = (enemyList: EnemyList[]) => {
	let prevVal = 0
	for (let i = 3; i < enemyList.length; i += 5) {
		let randomVal
		while (true) {
			randomVal = Math.floor(Math.random() * 5 + 1)
			if (randomVal !== prevVal) break
		}
		switch (randomVal) {
			case 1:
				enemyList[i].bonus = 'GRENADE'
				break
			case 2:
				enemyList[i].bonus = 'HELMET'
				break
			case 3:
				enemyList[i].bonus = 'TIMER'
				break
			case 4:
				enemyList[i].bonus = 'HP'
				break
			default:
				enemyList[i].bonus = 'STAR'
				break
		}
		prevVal = randomVal
	}
	return enemyList
}

export const generateBonusCoordinates = () => {
	return {
		x: Math.floor(Math.random() * 187 + 10),
		y: Math.floor(Math.random() * 187 + 10),
	}
}

export const deleteBonus = (id: string, bonuses: Bonus[]) => {
	mutationFilter(bonuses, (obj: Bonus) => obj.id !== id)
}

export const getBonusCoordinates = (bonus: Bonus) => {
	const bonusCoordinates: BusyCoordinates[] = []
	getSideCoordinates(bonusCoordinates, 15, bonus, {
		byI: '+',
	})
	getSideCoordinates(
		bonusCoordinates,
		15,
		bonus,
		{
			byI: '+',
		},
		{ extraCalc: '+14' }
	)
	getSideCoordinates(bonusCoordinates, 14, bonus, undefined, {
		byI: '+',
	})
	getSideCoordinates(
		bonusCoordinates,
		14,
		bonus,
		{ extraCalc: '+15' },
		{
			byI: '+',
		}
	)

	return bonusCoordinates
}
