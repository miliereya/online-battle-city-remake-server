import { Game } from '../instances'
import { animationsFrameLogic } from './animations.logic'
import { bonusesFrameLogic } from './bonuses.logic'
import { bulletsFrameLogic } from './bullet.logic'
import { enemiesFrameLogic, enemiesSpawnLogic } from './enemy.logic'
import { levelFrameLogic } from './level.logic'
import { playersFrameLogic } from './players.logic'
import { gameStatusFrameLogic } from './status.logic'

export const gameFrame = (game: Game) => {
	const { levelChangeAnimation, gameOverAnimation, isPaused } = game
	game.resetSounds()
	levelFrameLogic(game)
	gameStatusFrameLogic(game)
	if (!levelChangeAnimation) {
		if (!gameOverAnimation) {
			playersFrameLogic(game)
		}
		if (!isPaused) {
			bonusesFrameLogic(game)
			bulletsFrameLogic(game)
			enemiesSpawnLogic(game)
			enemiesFrameLogic(game)
			animationsFrameLogic(game)
		}
	}
}
