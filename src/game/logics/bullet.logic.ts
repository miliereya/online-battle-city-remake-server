import { Bullet } from '../init/bullet.init'
import { mutationFilter } from '../utils/array.utils'

export const bulletsFrameLogic = (bullets: Bullet[]) => {
	for (let i = 0; i < bullets.length; i++) {
		const bullet = bullets[i]
		const x = bullet.coordinateX
		const y = bullet.coordinateY
		const direction = bullet.direction
		let willHit = false
		switch (direction) {
			case 'TOP':
				if (y > 204) {
					willHit = true
				} else {
					bullet.coordinateY += 2
				}
				break
			case 'BOTTOM':
				if (y < 2) {
					willHit = true
				} else {
					bullet.coordinateY -= 2
				}
				break
			case 'RIGHT':
				if (x > 204) {
					willHit = true
				} else {
					bullet.coordinateX += 2
				}
				break
			default:
				if (x < 3) {
					willHit = true
				} else {
					bullet.coordinateX -= 2
				}
				break
		}
		if (willHit) {
			mutationFilter(bullets, (b: Bullet) => b.id !== bullet.id)
		}
	}
}
