import { Game } from '../init/game.init'

export const globalFrameLogic = (game: Game) => {
	if (game.timerBonus) game.timerBonus--
}
