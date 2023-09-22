import { GameObject } from '../init'
import { Map } from '../types'
import { MapInstance } from './map-instance'

export const Map5 = (): Map => ({
	objects: [
		...MapInstance(),
		new GameObject('BRICK', 0, 1),
		new GameObject('BRICK', 1, 1),
		new GameObject('BRICK', 1, 2),
		new GameObject('BRICK', 0, 2),
		new GameObject('BRICK', 2, 2),
		new GameObject('BRICK', 3, 2),
		new GameObject('BRICK', 3, 3),
		new GameObject('BRICK', 4, 3),
		new GameObject('BRICK', 5, 3),
		new GameObject('BRICK', 2, 3),
		new GameObject('BRICK', 1, 3),
		new GameObject('BRICK', 0, 3),
		new GameObject('BRICK', 7, 6),
		new GameObject('BRICK', 6, 6),
		new GameObject('BRICK', 8, 6),
		new GameObject('BRICK', 9, 6),
		new GameObject('BRICK', 9, 5),
		new GameObject('BRICK', 8, 5),
		new GameObject('BRICK', 8, 4),
		new GameObject('BRICK', 9, 4),
		new GameObject('BRICK', 10, 5),
		new GameObject('BRICK', 11, 5),
		new GameObject('BRICK', 12, 5),
		new GameObject('BRICK', 13, 5),
		new GameObject('BRICK', 14, 5),
		new GameObject('BRICK', 15, 5),
		new GameObject('BRICK', 16, 5),
		new GameObject('BRICK', 17, 5),
		new GameObject('BRICK', 16, 4),
		new GameObject('BRICK', 17, 4),
		new GameObject('BRICK', 18, 4),
		new GameObject('BRICK', 19, 4),
		new GameObject('BRICK', 19, 3),
		new GameObject('BRICK', 18, 3),
		new GameObject('BRICK', 20, 3),
		new GameObject('BRICK', 21, 3),
		new GameObject('BRICK', 21, 2),
		new GameObject('BRICK', 20, 2),
		new GameObject('BRICK', 22, 6),
		new GameObject('BRICK', 23, 6),
		new GameObject('BRICK', 24, 6),
		new GameObject('BRICK', 25, 6),
		new GameObject('BRICK', 25, 7),
		new GameObject('BRICK', 24, 7),
		new GameObject('BRICK', 23, 7),
		new GameObject('BRICK', 22, 7),
		new GameObject('STONE', 21, 6),
		new GameObject('STONE', 21, 7),
		new GameObject('STONE', 21, 8),
		new GameObject('STONE', 21, 9),
		new GameObject('STONE', 21, 10),
		new GameObject('STONE', 21, 11),
		new GameObject('STONE', 22, 11),
		new GameObject('STONE', 22, 10),
		new GameObject('BRICK', 22, 14),
		new GameObject('BRICK', 22, 15),
		new GameObject('BRICK', 23, 15),
		new GameObject('BRICK', 24, 15),
		new GameObject('BRICK', 25, 15),
		new GameObject('BRICK', 25, 14),
		new GameObject('BRICK', 24, 14),
		new GameObject('BRICK', 23, 14),
		new GameObject('WATER', 25, 18),
		new GameObject('WATER', 25, 19),
		new GameObject('WATER', 24, 19),
		new GameObject('WATER', 24, 18),
		new GameObject('WATER', 21, 18),
		new GameObject('WATER', 21, 19),
		new GameObject('WATER', 20, 19),
		new GameObject('WATER', 20, 18),
		new GameObject('WATER', 19, 18),
		new GameObject('WATER', 19, 19),
		new GameObject('WATER', 18, 19),
		new GameObject('WATER', 18, 18),
		new GameObject('WATER', 18, 17),
		new GameObject('WATER', 19, 17),
		new GameObject('WATER', 19, 16),
		new GameObject('WATER', 18, 16),
		new GameObject('WATER', 18, 15),
		new GameObject('WATER', 19, 15),
		new GameObject('WATER', 19, 14),
		new GameObject('WATER', 18, 14),
		new GameObject('WATER', 17, 14),
		new GameObject('WATER', 17, 15),
		new GameObject('WATER', 16, 15),
		new GameObject('WATER', 16, 14),
		new GameObject('WATER', 15, 14),
		new GameObject('WATER', 15, 15),
		new GameObject('BRICK', 17, 8),
		new GameObject('BRICK', 17, 9),
		new GameObject('BRICK', 16, 9),
		new GameObject('BRICK', 16, 8),
		new GameObject('STONE', 13, 9),
		new GameObject('STONE', 13, 8),
		new GameObject('STONE', 12, 8),
		new GameObject('STONE', 12, 9),
		new GameObject('WATER', 9, 9),
		new GameObject('WATER', 9, 8),
		new GameObject('WATER', 8, 8),
		new GameObject('WATER', 8, 9),
		new GameObject('WATER', 8, 10),
		new GameObject('WATER', 9, 10),
		new GameObject('WATER', 9, 11),
		new GameObject('WATER', 8, 11),
		new GameObject('WATER', 8, 12),
		new GameObject('WATER', 9, 12),
		new GameObject('WATER', 9, 13),
		new GameObject('WATER', 8, 13),
		new GameObject('WATER', 8, 14),
		new GameObject('WATER', 9, 14),
		new GameObject('WATER', 8, 15),
		new GameObject('WATER', 9, 15),
		new GameObject('WATER', 10, 15),
		new GameObject('WATER', 11, 15),
		new GameObject('WATER', 11, 14),
		new GameObject('WATER', 10, 14),
		new GameObject('WATER', 14, 14),
		new GameObject('WATER', 14, 15),
		new GameObject('BRICK', 10, 13),
		new GameObject('BRICK', 11, 13),
		new GameObject('BRICK', 11, 12),
		new GameObject('BRICK', 10, 12),
		new GameObject('BRICK', 14, 13),
		new GameObject('BRICK', 15, 13),
		new GameObject('BRICK', 15, 12),
		new GameObject('BRICK', 14, 12),
		new GameObject('BRICK', 16, 12),
		new GameObject('BRICK', 16, 13),
		new GameObject('WATER', 0, 8),
		new GameObject('WATER', 1, 8),
		new GameObject('WATER', 2, 8),
		new GameObject('WATER', 3, 8),
		new GameObject('WATER', 4, 8),
		new GameObject('WATER', 5, 8),
		new GameObject('WATER', 5, 9),
		new GameObject('WATER', 4, 9),
		new GameObject('WATER', 3, 9),
		new GameObject('WATER', 2, 9),
		new GameObject('WATER', 0, 9),
		new GameObject('WATER', 1, 9),
		new GameObject('BRICK', 0, 12),
		new GameObject('BRICK', 1, 12),
		new GameObject('BRICK', 2, 12),
		new GameObject('BRICK', 3, 12),
		new GameObject('BRICK', 3, 13),
		new GameObject('BRICK', 2, 13),
		new GameObject('BRICK', 1, 13),
		new GameObject('BRICK', 0, 13),
		new GameObject('BRICK', 4, 14),
		new GameObject('BRICK', 5, 14),
		new GameObject('BRICK', 0, 17),
		new GameObject('BRICK', 1, 17),
		new GameObject('BRICK', 1, 18),
		new GameObject('BRICK', 0, 18),
		new GameObject('BRICK', 0, 19),
		new GameObject('BRICK', 1, 19),
		new GameObject('STONE', 0, 20),
		new GameObject('STONE', 1, 20),
		new GameObject('STONE', 1, 21),
		new GameObject('STONE', 0, 21),
		new GameObject('STONE', 0, 22),
		new GameObject('STONE', 1, 22),
		new GameObject('BRICK', 4, 22),
		new GameObject('BRICK', 5, 22),
		new GameObject('BRICK', 5, 21),
		new GameObject('BRICK', 4, 21),
		new GameObject('BRICK', 5, 20),
		new GameObject('BRICK', 5, 19),
		new GameObject('BRICK', 4, 19),
		new GameObject('BRICK', 4, 20),
		new GameObject('BRICK', 4, 18),
		new GameObject('BRICK', 5, 18),
		new GameObject('BRICK', 6, 18),
		new GameObject('BRICK', 7, 18),
		new GameObject('BRICK', 8, 18),
		new GameObject('BRICK', 9, 18),
		new GameObject('BRICK', 9, 17),
		new GameObject('BRICK', 8, 17),
		new GameObject('BRICK', 6, 19),
		new GameObject('BRICK', 7, 19),
		new GameObject('BRICK', 8, 19),
		new GameObject('BRICK', 9, 19),
		new GameObject('BRICK', 12, 19),
		new GameObject('BRICK', 12, 18),
		new GameObject('BRICK', 13, 18),
		new GameObject('BRICK', 14, 18),
		new GameObject('BRICK', 13, 19),
		new GameObject('BRICK', 14, 19),
		new GameObject('BRICK', 15, 19),
		new GameObject('BRICK', 15, 18),
		new GameObject('BRICK', 13, 20),
		new GameObject('BRICK', 12, 20),
		new GameObject('BRICK', 12, 21),
		new GameObject('BRICK', 13, 21),
		new GameObject('BRICK', 11, 25),
		new GameObject('BRICK', 10, 25),
		new GameObject('BRICK', 10, 24),
		new GameObject('BRICK', 11, 24),
		new GameObject('BRICK', 9, 25),
		new GameObject('BRICK', 8, 25),
		new GameObject('BRICK', 8, 24),
		new GameObject('BRICK', 9, 24),
		new GameObject('BRICK', 8, 23),
		new GameObject('BRICK', 9, 22),
		new GameObject('BRICK', 9, 23),
		new GameObject('BRICK', 8, 22),
		new GameObject('STONE', 16, 23),
		new GameObject('STONE', 17, 23),
		new GameObject('STONE', 18, 23),
		new GameObject('STONE', 19, 23),
		new GameObject('STONE', 20, 23),
		new GameObject('STONE', 21, 23),
		new GameObject('STONE', 21, 22),
		new GameObject('STONE', 20, 22),
	],
	enemyList: [
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'HEAVY' },
		{ type: 'HEAVY' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
	],
})
