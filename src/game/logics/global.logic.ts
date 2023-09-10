import { Game } from '../init/game.init'
import { maps as mapsInstance } from '../maps'
import { Map } from '../types'
import { generateBonuses } from '../utils/bonus.utils'

export const globalFrameLogic = (game: Game) => {
	if (game.timerBonus) game.timerBonus--
}

export const levelFrameLogic = (game: Game) => {
	if (game.levelChangeAnimation === 110) {
		game.sounds.level_start = true
		const { p1, p2 } = game
		const maps = JSON.parse(JSON.stringify(mapsInstance))
		const map: Map = maps['map' + game.level]
		game.objects = map.objects
		game.bonuses = []
		game.bullets = []
		game.bangs = []
		game.enemies = []
		game.enemySpawnCooldown = 0
		game.enemySpawnPosition = 1
		game.timerBonus = 0
		p1.deathCooldown = 0
		p1.spawnAnimation = 50
		p1.helmet = 120
		p1.coordinateX = 71
		p1.coordinateY = 7
		p2.deathCooldown = 0
		p2.spawnAnimation = 50
		p2.helmet = 120
		p2.coordinateX = 136
		p2.coordinateY = 7
		game.enemyList = generateBonuses(map.enemyList)
	}
	if (game.levelChangeAnimation) game.levelChangeAnimation--

	if (game.levelEndDelay === 1) {
		game.level++
		game.levelChangeAnimation = 110
	}

	if (game.levelEndDelay) {
		game.levelEndDelay--
	}

	if (
		game.enemies.length === 0 &&
		game.enemyList.length === 0 &&
		!game.gameOverAnimation &&
		!game.levelEndDelay &&
		!game.levelChangeAnimation
	) {
		game.levelEndDelay = 100
	}
}

export const gameStatusLogic = (game: Game) => {
	const { p1, p2, isFlagAlive } = game
	if (
		(!game.gameOverAnimation && !p1.lives && !p2.lives) ||
		(!isFlagAlive && !game.gameOverAnimation)
	) {
		game.gameOverAnimation = 110
	}
	if (game.gameOverAnimation === 75) {
		game.sounds.game_over = true
	}

	if (game.gameOverAnimation === 1) {
		game.isEnded = true
	}
	if (game.gameOverAnimation) {
		game.gameOverAnimation--
	}
}
