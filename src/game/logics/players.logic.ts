import { Player } from '../init/player.init'

export const playersCooldownFrameLogic = (p1: Player, p2: Player) => {
	if (p1.cooldown !== 0) {
		p1.cooldown--
	}
	if (p2.cooldown !== 0) {
		p2.cooldown--
	}
}
