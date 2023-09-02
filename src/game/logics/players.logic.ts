import { Player } from '../init/player.init'

export const playerCooldownFrameLogic = (p: Player, num: 1 | 2) => {
	if (p.deathCooldown === 1) {
		p.type = 'LVL_0'
		p.direction = 'TOP'
		p.coordinateX = num === 1 ? 37 : 157
		p.coordinateY = 7
	}
	if (p.deathCooldown > 0) {
		p.deathCooldown -= 1
	}
	if (p.cooldown !== 0) {
		p.cooldown--
	}
}
