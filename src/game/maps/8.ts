import { GameObject } from '../instances'
import { Map } from '../types'
import { MapInstance } from './map-instance'

export const Map8 = (): Map => ({
	objects: [
		...MapInstance(),
		new GameObject('TREES', 0, 2),
		new GameObject('TREES', 1, 2),
		new GameObject('TREES', 1, 3),
		new GameObject('TREES', 0, 3),
		new GameObject('TREES', 0, 4),
		new GameObject('TREES', 1, 4),
		new GameObject('TREES', 2, 4),
		new GameObject('TREES', 3, 4),
		new GameObject('TREES', 3, 5),
		new GameObject('TREES', 2, 5),
		new GameObject('TREES', 1, 5),
		new GameObject('TREES', 0, 6),
		new GameObject('TREES', 1, 6),
		new GameObject('TREES', 2, 6),
		new GameObject('TREES', 3, 6),
		new GameObject('TREES', 0, 5),
		new GameObject('TREES', 3, 7),
		new GameObject('TREES', 2, 7),
		new GameObject('TREES', 1, 7),
		new GameObject('TREES', 0, 7),
		new GameObject('WATER', 0, 8),
		new GameObject('WATER', 0, 9),
		new GameObject('WATER', 1, 9),
		new GameObject('WATER', 1, 8),
		new GameObject('WATER', 2, 9),
		new GameObject('WATER', 3, 8),
		new GameObject('WATER', 2, 8),
		new GameObject('WATER', 3, 9),
		new GameObject('BRICK', 4, 5),
		new GameObject('BRICK', 5, 5),
		new GameObject('BRICK', 5, 4),
		new GameObject('BRICK', 4, 4),
		new GameObject('BRICK', 4, 3),
		new GameObject('BRICK', 5, 3),
		new GameObject('BRICK', 5, 2),
		new GameObject('BRICK', 4, 2),
		new GameObject('STONE', 3, 2),
		new GameObject('STONE', 2, 2),
		new GameObject('BRICK', 7, 7),
		new GameObject('BRICK', 7, 6),
		new GameObject('BRICK', 8, 5),
		new GameObject('BRICK', 8, 4),
		new GameObject('BRICK', 8, 3),
		new GameObject('BRICK', 8, 2),
		new GameObject('BRICK', 12, 6),
		new GameObject('BRICK', 13, 6),
		new GameObject('BRICK', 14, 6),
		new GameObject('BRICK', 15, 6),
		new GameObject('BRICK', 15, 5),
		new GameObject('BRICK', 15, 4),
		new GameObject('BRICK', 18, 3),
		new GameObject('BRICK', 19, 3),
		new GameObject('BRICK', 20, 4),
		new GameObject('BRICK', 21, 4),
		new GameObject('BRICK', 22, 4),
		new GameObject('BRICK', 22, 5),
		new GameObject('BRICK', 23, 5),
		new GameObject('BRICK', 23, 4),
		new GameObject('BRICK', 22, 3),
		new GameObject('BRICK', 22, 2),
		new GameObject('BRICK', 23, 3),
		new GameObject('BRICK', 23, 2),
		new GameObject('BRICK', 23, 1),
		new GameObject('BRICK', 22, 1),
		new GameObject('BRICK', 18, 0),
		new GameObject('BRICK', 19, 0),
		new GameObject('STONE', 19, 4),
		new GameObject('STONE', 18, 4),
		new GameObject('WATER', 15, 8),
		new GameObject('WATER', 14, 8),
		new GameObject('WATER', 13, 8),
		new GameObject('WATER', 12, 8),
		new GameObject('WATER', 11, 8),
		new GameObject('WATER', 10, 8),
		new GameObject('WATER', 9, 8),
		new GameObject('WATER', 8, 8),
		new GameObject('WATER', 7, 8),
		new GameObject('WATER', 6, 8),
		new GameObject('WATER', 6, 9),
		new GameObject('WATER', 7, 9),
		new GameObject('WATER', 8, 9),
		new GameObject('WATER', 9, 9),
		new GameObject('WATER', 10, 9),
		new GameObject('WATER', 11, 9),
		new GameObject('WATER', 12, 9),
		new GameObject('WATER', 13, 9),
		new GameObject('WATER', 14, 9),
		new GameObject('WATER', 15, 9),
		new GameObject('WATER', 18, 9),
		new GameObject('WATER', 18, 8),
		new GameObject('WATER', 19, 9),
		new GameObject('WATER', 20, 9),
		new GameObject('WATER', 21, 9),
		new GameObject('WATER', 22, 9),
		new GameObject('WATER', 23, 9),
		new GameObject('WATER', 24, 9),
		new GameObject('WATER', 25, 8),
		new GameObject('WATER', 24, 8),
		new GameObject('WATER', 23, 8),
		new GameObject('WATER', 22, 8),
		new GameObject('WATER', 25, 9),
		new GameObject('WATER', 21, 8),
		new GameObject('WATER', 20, 8),
		new GameObject('WATER', 19, 8),
		new GameObject('TREES', 15, 10),
		new GameObject('TREES', 14, 10),
		new GameObject('TREES', 14, 11),
		new GameObject('TREES', 15, 11),
		new GameObject('TREES', 16, 11),
		new GameObject('TREES', 16, 10),
		new GameObject('TREES', 17, 11),
		new GameObject('TREES', 18, 10),
		new GameObject('TREES', 17, 10),
		new GameObject('TREES', 18, 11),
		new GameObject('TREES', 19, 11),
		new GameObject('TREES', 19, 10),
		new GameObject('TREES', 20, 10),
		new GameObject('TREES', 20, 11),
		new GameObject('TREES', 21, 11),
		new GameObject('TREES', 21, 10),
		new GameObject('STONE', 20, 12),
		new GameObject('STONE', 21, 12),
		new GameObject('STONE', 22, 12),
		new GameObject('STONE', 23, 12),
		new GameObject('BRICK', 24, 13),
		new GameObject('BRICK', 25, 12),
		new GameObject('BRICK', 24, 12),
		new GameObject('BRICK', 25, 13),
		new GameObject('BRICK', 21, 15),
		new GameObject('BRICK', 20, 15),
		new GameObject('BRICK', 19, 15),
		new GameObject('BRICK', 19, 14),
		new GameObject('BRICK', 19, 13),
		new GameObject('BRICK', 19, 12),
		new GameObject('BRICK', 18, 12),
		new GameObject('BRICK', 18, 13),
		new GameObject('BRICK', 18, 14),
		new GameObject('BRICK', 18, 15),
		new GameObject('BRICK', 17, 15),
		new GameObject('BRICK', 16, 15),
		new GameObject('BRICK', 15, 15),
		new GameObject('BRICK', 15, 16),
		new GameObject('BRICK', 14, 16),
		new GameObject('BRICK', 13, 16),
		new GameObject('BRICK', 12, 16),
		new GameObject('BRICK', 12, 15),
		new GameObject('BRICK', 11, 15),
		new GameObject('BRICK', 14, 15),
		new GameObject('BRICK', 13, 15),
		new GameObject('BRICK', 11, 14),
		new GameObject('BRICK', 11, 13),
		new GameObject('BRICK', 11, 12),
		new GameObject('BRICK', 12, 12),
		new GameObject('BRICK', 13, 12),
		new GameObject('BRICK', 14, 12),
		new GameObject('BRICK', 15, 12),
		new GameObject('BRICK', 15, 13),
		new GameObject('BRICK', 15, 14),
		new GameObject('BRICK', 14, 14),
		new GameObject('BRICK', 13, 13),
		new GameObject('BRICK', 12, 13),
		new GameObject('BRICK', 12, 14),
		new GameObject('BRICK', 13, 14),
		new GameObject('BRICK', 14, 13),
		new GameObject('TREES', 16, 13),
		new GameObject('TREES', 17, 12),
		new GameObject('TREES', 16, 12),
		new GameObject('TREES', 17, 13),
		new GameObject('STONE', 22, 15),
		new GameObject('STONE', 23, 15),
		new GameObject('STONE', 24, 15),
		new GameObject('STONE', 25, 15),
		new GameObject('WATER', 25, 18),
		new GameObject('WATER', 25, 19),
		new GameObject('WATER', 24, 19),
		new GameObject('WATER', 24, 18),
		new GameObject('BRICK', 24, 20),
		new GameObject('BRICK', 24, 21),
		new GameObject('BRICK', 23, 21),
		new GameObject('BRICK', 23, 20),
		new GameObject('BRICK', 20, 22),
		new GameObject('BRICK', 20, 23),
		new GameObject('BRICK', 19, 23),
		new GameObject('BRICK', 19, 24),
		new GameObject('BRICK', 18, 25),
		new GameObject('BRICK', 19, 25),
		new GameObject('BRICK', 18, 24),
		new GameObject('BRICK', 18, 23),
		new GameObject('BRICK', 18, 22),
		new GameObject('BRICK', 19, 22),
		new GameObject('BRICK', 19, 21),
		new GameObject('BRICK', 18, 21),
		new GameObject('WATER', 21, 19),
		new GameObject('WATER', 21, 18),
		new GameObject('WATER', 20, 18),
		new GameObject('WATER', 20, 19),
		new GameObject('WATER', 19, 19),
		new GameObject('WATER', 19, 18),
		new GameObject('WATER', 18, 18),
		new GameObject('WATER', 18, 19),
		new GameObject('WATER', 17, 19),
		new GameObject('WATER', 17, 18),
		new GameObject('WATER', 16, 19),
		new GameObject('WATER', 15, 18),
		new GameObject('WATER', 14, 18),
		new GameObject('WATER', 16, 18),
		new GameObject('WATER', 15, 19),
		new GameObject('WATER', 14, 19),
		new GameObject('WATER', 13, 19),
		new GameObject('WATER', 12, 19),
		new GameObject('WATER', 11, 19),
		new GameObject('WATER', 10, 19),
		new GameObject('WATER', 9, 19),
		new GameObject('WATER', 8, 19),
		new GameObject('WATER', 7, 19),
		new GameObject('WATER', 6, 19),
		new GameObject('WATER', 5, 19),
		new GameObject('WATER', 4, 19),
		new GameObject('WATER', 3, 19),
		new GameObject('WATER', 2, 18),
		new GameObject('WATER', 3, 18),
		new GameObject('WATER', 2, 19),
		new GameObject('WATER', 4, 18),
		new GameObject('WATER', 5, 18),
		new GameObject('WATER', 6, 18),
		new GameObject('WATER', 7, 18),
		new GameObject('WATER', 8, 18),
		new GameObject('WATER', 9, 18),
		new GameObject('WATER', 10, 18),
		new GameObject('WATER', 11, 18),
		new GameObject('WATER', 12, 18),
		new GameObject('WATER', 13, 18),
		new GameObject('TREES', 0, 19),
		new GameObject('TREES', 1, 19),
		new GameObject('TREES', 1, 18),
		new GameObject('TREES', 0, 18),
		new GameObject('TREES', 0, 20),
		new GameObject('TREES', 1, 20),
		new GameObject('TREES', 2, 20),
		new GameObject('TREES', 3, 20),
		new GameObject('TREES', 4, 20),
		new GameObject('TREES', 5, 20),
		new GameObject('TREES', 5, 21),
		new GameObject('TREES', 4, 21),
		new GameObject('TREES', 3, 21),
		new GameObject('TREES', 2, 21),
		new GameObject('TREES', 1, 21),
		new GameObject('TREES', 0, 22),
		new GameObject('TREES', 0, 23),
		new GameObject('TREES', 1, 23),
		new GameObject('TREES', 1, 22),
		new GameObject('TREES', 0, 21),
		new GameObject('BRICK', 2, 23),
		new GameObject('BRICK', 2, 22),
		new GameObject('BRICK', 3, 23),
		new GameObject('BRICK', 3, 22),
		new GameObject('BRICK', 4, 23),
		new GameObject('BRICK', 4, 22),
		new GameObject('BRICK', 5, 22),
		new GameObject('BRICK', 5, 23),
		new GameObject('BRICK', 4, 24),
		new GameObject('BRICK', 5, 25),
		new GameObject('BRICK', 4, 25),
		new GameObject('BRICK', 5, 24),
		new GameObject('BRICK', 6, 23),
		new GameObject('BRICK', 7, 23),
		new GameObject('BRICK', 6, 22),
		new GameObject('BRICK', 7, 22),
		new GameObject('BRICK', 10, 22),
		new GameObject('BRICK', 10, 23),
		new GameObject('BRICK', 11, 23),
		new GameObject('BRICK', 11, 24),
		new GameObject('BRICK', 10, 24),
		new GameObject('BRICK', 10, 25),
		new GameObject('BRICK', 11, 25),
		new GameObject('BRICK', 11, 22),
		new GameObject('BRICK', 11, 21),
		new GameObject('BRICK', 10, 21),
		new GameObject('BRICK', 14, 24),
		new GameObject('BRICK', 15, 24),
		new GameObject('BRICK', 15, 21),
		new GameObject('BRICK', 14, 21),
		new GameObject('BRICK', 14, 20),
		new GameObject('BRICK', 15, 20),
		new GameObject('STONE', 15, 22),
		new GameObject('STONE', 14, 22),
		new GameObject('BRICK', 2, 17),
		new GameObject('BRICK', 3, 17),
		new GameObject('BRICK', 3, 16),
		new GameObject('BRICK', 2, 16),
		new GameObject('BRICK', 4, 15),
		new GameObject('BRICK', 5, 14),
		new GameObject('BRICK', 5, 15),
		new GameObject('BRICK', 4, 14),
		new GameObject('BRICK', 6, 13),
		new GameObject('BRICK', 7, 13),
		new GameObject('BRICK', 7, 12),
		new GameObject('BRICK', 6, 12),
		new GameObject('BRICK', 3, 13),
		new GameObject('BRICK', 2, 13),
		new GameObject('BRICK', 1, 13),
		new GameObject('BRICK', 0, 13),
		new GameObject('BRICK', 0, 12),
		new GameObject('BRICK', 1, 12),
		new GameObject('BRICK', 2, 12),
		new GameObject('BRICK', 3, 12),
		new GameObject('STONE', 6, 11),
		new GameObject('STONE', 7, 11),
		new GameObject('STONE', 7, 10),
		new GameObject('STONE', 6, 10),
		new GameObject('STONE', 10, 10),
		new GameObject('STONE', 11, 10),
	],
	enemyList: [
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'HEAVY' },
		{ type: 'HEAVY' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
		{ type: 'SPEEDY' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
	],
})
