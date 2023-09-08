import { Bang } from '../init/bang.init'
import { Game } from '../init/game.init'
import { mutationFilter } from '../utils/array.utils'

export const animationsFrameLogic = (game: Game) => {
	const { bangs } = game
	for (let i = 0; i < bangs.length; i++) {
		const bang = bangs[i]
		bang.timer++
		if (
			(bang.type === 'BIG' && bang.timer === 15) ||
			(bang.type === 'SMALL' && bang.timer === 6)
		) {
			mutationFilter(bangs, (b: Bang) => b.id === bang.id)
		}
	}
}
