import { GameObject } from '../init'
import { Map } from '../types'
import { MapInstance } from './map-instance'

export const Map4 = (): Map => ({
	objects: [
		...MapInstance(),
		new GameObject('STONE', 0, 0),
		new GameObject('STONE', 1, 0),
		new GameObject('STONE', 1, 1),
		new GameObject('STONE', 0, 1),
		new GameObject('TREES', 0, 3),
		new GameObject('TREES', 1, 3),
		new GameObject('TREES', 0, 2),
		new GameObject('TREES', 1, 2),
		new GameObject('TREES', 2, 1),
		new GameObject('TREES', 3, 0),
		new GameObject('TREES', 3, 1),
		new GameObject('TREES', 2, 0),
		new GameObject('BRICK', 2, 4),
		new GameObject('BRICK', 2, 5),
		new GameObject('BRICK', 3, 5),
		new GameObject('BRICK', 3, 4),
		new GameObject('BRICK', 4, 4),
		new GameObject('BRICK', 5, 5),
		new GameObject('BRICK', 4, 5),
		new GameObject('BRICK', 5, 4),
		new GameObject('BRICK', 4, 3),
		new GameObject('BRICK', 5, 3),
		new GameObject('BRICK', 6, 3),
		new GameObject('BRICK', 6, 4),
		new GameObject('BRICK', 7, 4),
		new GameObject('BRICK', 7, 3),
		new GameObject('BRICK', 8, 5),
		new GameObject('BRICK', 9, 5),
		new GameObject('BRICK', 10, 5),
		new GameObject('BRICK', 10, 4),
		new GameObject('BRICK', 11, 4),
		new GameObject('BRICK', 12, 4),
		new GameObject('BRICK', 13, 4),
		new GameObject('BRICK', 13, 5),
		new GameObject('BRICK', 12, 5),
		new GameObject('BRICK', 11, 5),
		new GameObject('BRICK', 6, 6),
		new GameObject('BRICK', 7, 6),
		new GameObject('BRICK', 8, 6),
		new GameObject('BRICK', 9, 6),
		new GameObject('BRICK', 10, 6),
		new GameObject('BRICK', 11, 6),
		new GameObject('BRICK', 12, 6),
		new GameObject('BRICK', 13, 6),
		new GameObject('BRICK', 14, 6),
		new GameObject('BRICK', 15, 6),
		new GameObject('BRICK', 16, 6),
		new GameObject('BRICK', 14, 5),
		new GameObject('BRICK', 15, 5),
		new GameObject('BRICK', 17, 6),
		new GameObject('BRICK', 18, 5),
		new GameObject('BRICK', 19, 5),
		new GameObject('BRICK', 20, 5),
		new GameObject('BRICK', 21, 5),
		new GameObject('BRICK', 21, 4),
		new GameObject('BRICK', 20, 4),
		new GameObject('BRICK', 19, 4),
		new GameObject('BRICK', 18, 4),
		new GameObject('BRICK', 18, 3),
		new GameObject('BRICK', 17, 3),
		new GameObject('BRICK', 16, 3),
		new GameObject('BRICK', 16, 4),
		new GameObject('BRICK', 17, 4),
		new GameObject('BRICK', 19, 3),
		new GameObject('BRICK', 17, 7),
		new GameObject('BRICK', 18, 7),
		new GameObject('BRICK', 19, 7),
		new GameObject('BRICK', 20, 7),
		new GameObject('BRICK', 21, 7),
		new GameObject('BRICK', 16, 7),
		new GameObject('BRICK', 15, 7),
		new GameObject('BRICK', 14, 7),
		new GameObject('BRICK', 13, 7),
		new GameObject('BRICK', 12, 7),
		new GameObject('BRICK', 11, 7),
		new GameObject('BRICK', 10, 7),
		new GameObject('BRICK', 9, 7),
		new GameObject('BRICK', 8, 7),
		new GameObject('BRICK', 7, 7),
		new GameObject('BRICK', 6, 7),
		new GameObject('BRICK', 5, 7),
		new GameObject('BRICK', 4, 7),
		new GameObject('BRICK', 3, 7),
		new GameObject('BRICK', 2, 7),
		new GameObject('BRICK', 3, 8),
		new GameObject('BRICK', 3, 9),
		new GameObject('BRICK', 4, 9),
		new GameObject('BRICK', 5, 9),
		new GameObject('BRICK', 6, 9),
		new GameObject('BRICK', 7, 9),
		new GameObject('BRICK', 8, 9),
		new GameObject('BRICK', 9, 9),
		new GameObject('BRICK', 10, 9),
		new GameObject('BRICK', 11, 9),
		new GameObject('BRICK', 12, 9),
		new GameObject('BRICK', 13, 9),
		new GameObject('BRICK', 14, 9),
		new GameObject('BRICK', 15, 9),
		new GameObject('BRICK', 16, 9),
		new GameObject('BRICK', 17, 9),
		new GameObject('BRICK', 18, 9),
		new GameObject('BRICK', 19, 9),
		new GameObject('BRICK', 20, 9),
		new GameObject('BRICK', 20, 8),
		new GameObject('BRICK', 19, 8),
		new GameObject('BRICK', 18, 8),
		new GameObject('BRICK', 17, 8),
		new GameObject('BRICK', 16, 8),
		new GameObject('BRICK', 15, 8),
		new GameObject('BRICK', 14, 8),
		new GameObject('BRICK', 13, 8),
		new GameObject('BRICK', 12, 8),
		new GameObject('BRICK', 11, 8),
		new GameObject('BRICK', 10, 8),
		new GameObject('BRICK', 9, 8),
		new GameObject('BRICK', 8, 8),
		new GameObject('BRICK', 7, 8),
		new GameObject('BRICK', 6, 8),
		new GameObject('BRICK', 5, 8),
		new GameObject('BRICK', 4, 8),
		new GameObject('BRICK', 4, 10),
		new GameObject('BRICK', 4, 11),
		new GameObject('BRICK', 4, 12),
		new GameObject('BRICK', 4, 13),
		new GameObject('BRICK', 5, 13),
		new GameObject('BRICK', 5, 12),
		new GameObject('BRICK', 5, 11),
		new GameObject('BRICK', 6, 11),
		new GameObject('BRICK', 7, 11),
		new GameObject('BRICK', 8, 11),
		new GameObject('BRICK', 8, 12),
		new GameObject('BRICK', 9, 12),
		new GameObject('BRICK', 10, 12),
		new GameObject('BRICK', 11, 12),
		new GameObject('BRICK', 10, 11),
		new GameObject('BRICK', 9, 11),
		new GameObject('BRICK', 11, 11),
		new GameObject('BRICK', 12, 11),
		new GameObject('BRICK', 13, 11),
		new GameObject('BRICK', 14, 11),
		new GameObject('BRICK', 15, 11),
		new GameObject('BRICK', 16, 11),
		new GameObject('BRICK', 17, 11),
		new GameObject('BRICK', 18, 11),
		new GameObject('BRICK', 19, 11),
		new GameObject('BRICK', 19, 10),
		new GameObject('BRICK', 18, 10),
		new GameObject('BRICK', 17, 10),
		new GameObject('BRICK', 16, 10),
		new GameObject('BRICK', 15, 10),
		new GameObject('BRICK', 14, 10),
		new GameObject('BRICK', 13, 10),
		new GameObject('BRICK', 12, 10),
		new GameObject('BRICK', 11, 10),
		new GameObject('BRICK', 10, 10),
		new GameObject('BRICK', 9, 10),
		new GameObject('BRICK', 8, 10),
		new GameObject('BRICK', 7, 10),
		new GameObject('BRICK', 6, 10),
		new GameObject('BRICK', 5, 10),
		new GameObject('STONE', 8, 14),
		new GameObject('STONE', 8, 15),
		new GameObject('STONE', 12, 14),
		new GameObject('STONE', 12, 15),
		new GameObject('BRICK', 14, 17),
		new GameObject('BRICK', 15, 17),
		new GameObject('BRICK', 16, 17),
		new GameObject('BRICK', 16, 16),
		new GameObject('BRICK', 16, 15),
		new GameObject('BRICK', 16, 14),
		new GameObject('BRICK', 16, 13),
		new GameObject('BRICK', 16, 12),
		new GameObject('BRICK', 17, 12),
		new GameObject('BRICK', 18, 13),
		new GameObject('BRICK', 17, 13),
		new GameObject('BRICK', 17, 14),
		new GameObject('BRICK', 18, 12),
		new GameObject('BRICK', 18, 14),
		new GameObject('BRICK', 18, 15),
		new GameObject('BRICK', 18, 16),
		new GameObject('BRICK', 18, 17),
		new GameObject('BRICK', 17, 17),
		new GameObject('BRICK', 17, 16),
		new GameObject('BRICK', 17, 15),
		new GameObject('BRICK', 19, 17),
		new GameObject('BRICK', 19, 16),
		new GameObject('BRICK', 19, 18),
		new GameObject('BRICK', 20, 18),
		new GameObject('BRICK', 21, 18),
		new GameObject('BRICK', 22, 18),
		new GameObject('BRICK', 22, 17),
		new GameObject('BRICK', 22, 16),
		new GameObject('BRICK', 22, 19),
		new GameObject('BRICK', 21, 19),
		new GameObject('BRICK', 21, 20),
		new GameObject('BRICK', 20, 20),
		new GameObject('BRICK', 20, 19),
		new GameObject('BRICK', 19, 20),
		new GameObject('BRICK', 19, 19),
		new GameObject('BRICK', 19, 21),
		new GameObject('BRICK', 18, 21),
		new GameObject('BRICK', 17, 21),
		new GameObject('BRICK', 17, 22),
		new GameObject('BRICK', 16, 22),
		new GameObject('BRICK', 15, 22),
		new GameObject('BRICK', 18, 19),
		new GameObject('BRICK', 18, 18),
		new GameObject('BRICK', 17, 19),
		new GameObject('BRICK', 17, 20),
		new GameObject('BRICK', 18, 20),
		new GameObject('BRICK', 17, 18),
		new GameObject('BRICK', 16, 18),
		new GameObject('BRICK', 16, 19),
		new GameObject('BRICK', 16, 20),
		new GameObject('BRICK', 15, 20),
		new GameObject('BRICK', 15, 19),
		new GameObject('BRICK', 15, 18),
		new GameObject('BRICK', 14, 18),
		new GameObject('BRICK', 14, 19),
		new GameObject('BRICK', 14, 20),
		new GameObject('BRICK', 16, 21),
		new GameObject('BRICK', 15, 21),
		new GameObject('BRICK', 14, 22),
		new GameObject('BRICK', 13, 23),
		new GameObject('BRICK', 12, 23),
		new GameObject('BRICK', 11, 23),
		new GameObject('BRICK', 10, 23),
		new GameObject('BRICK', 10, 22),
		new GameObject('BRICK', 9, 22),
		new GameObject('BRICK', 8, 22),
		new GameObject('BRICK', 8, 21),
		new GameObject('BRICK', 7, 21),
		new GameObject('BRICK', 7, 20),
		new GameObject('BRICK', 7, 19),
		new GameObject('BRICK', 6, 19),
		new GameObject('BRICK', 6, 18),
		new GameObject('BRICK', 6, 17),
		new GameObject('BRICK', 5, 17),
		new GameObject('BRICK', 5, 16),
		new GameObject('BRICK', 5, 15),
		new GameObject('BRICK', 5, 14),
		new GameObject('BRICK', 7, 17),
		new GameObject('BRICK', 7, 18),
		new GameObject('BRICK', 8, 18),
		new GameObject('BRICK', 9, 18),
		new GameObject('BRICK', 10, 18),
		new GameObject('BRICK', 11, 18),
		new GameObject('BRICK', 12, 18),
		new GameObject('BRICK', 13, 18),
		new GameObject('BRICK', 12, 19),
		new GameObject('BRICK', 11, 19),
		new GameObject('BRICK', 10, 19),
		new GameObject('BRICK', 9, 19),
		new GameObject('BRICK', 8, 19),
		new GameObject('BRICK', 9, 20),
		new GameObject('BRICK', 10, 20),
		new GameObject('BRICK', 11, 20),
		new GameObject('BRICK', 12, 20),
		new GameObject('BRICK', 13, 19),
		new GameObject('BRICK', 10, 21),
		new GameObject('BRICK', 8, 20),
		new GameObject('BRICK', 9, 21),
		new GameObject('BRICK', 13, 20),
		new GameObject('BRICK', 14, 21),
		new GameObject('BRICK', 13, 21),
		new GameObject('BRICK', 12, 22),
		new GameObject('BRICK', 11, 22),
		new GameObject('BRICK', 11, 21),
		new GameObject('BRICK', 12, 21),
		new GameObject('BRICK', 13, 22),
		new GameObject('WATER', 0, 14),
		new GameObject('WATER', 1, 14),
		new GameObject('WATER', 1, 15),
		new GameObject('WATER', 0, 15),
		new GameObject('WATER', 25, 13),
		new GameObject('WATER', 24, 13),
		new GameObject('WATER', 23, 13),
		new GameObject('WATER', 22, 13),
		new GameObject('WATER', 22, 12),
		new GameObject('WATER', 23, 12),
		new GameObject('WATER', 24, 12),
		new GameObject('WATER', 25, 12),
		new GameObject('TREES', 25, 2),
		new GameObject('TREES', 25, 3),
		new GameObject('TREES', 25, 4),
		new GameObject('TREES', 25, 5),
		new GameObject('TREES', 24, 5),
		new GameObject('TREES', 24, 4),
		new GameObject('TREES', 24, 3),
		new GameObject('TREES', 24, 2),
		new GameObject('TREES', 23, 2),
		new GameObject('TREES', 23, 3),
		new GameObject('TREES', 22, 3),
		new GameObject('TREES', 22, 2),
		new GameObject('TREES', 22, 1),
		new GameObject('TREES', 23, 1),
		new GameObject('TREES', 23, 0),
		new GameObject('TREES', 22, 0),
		new GameObject('TREES', 21, 0),
		new GameObject('TREES', 20, 0),
		new GameObject('TREES', 20, 1),
		new GameObject('TREES', 21, 1),
		new GameObject('STONE', 25, 1),
		new GameObject('STONE', 25, 0),
		new GameObject('STONE', 24, 0),
		new GameObject('STONE', 24, 1),
		new GameObject('STONE', 25, 21),
		new GameObject('STONE', 24, 21),
		new GameObject('TREES', 25, 22),
		new GameObject('TREES', 25, 23),
		new GameObject('TREES', 24, 23),
		new GameObject('TREES', 24, 22),
		new GameObject('TREES', 23, 25),
		new GameObject('TREES', 23, 24),
		new GameObject('TREES', 22, 24),
		new GameObject('TREES', 22, 25),
		new GameObject('TREES', 2, 25),
		new GameObject('TREES', 3, 25),
		new GameObject('TREES', 3, 24),
		new GameObject('TREES', 2, 24),
		new GameObject('TREES', 4, 24),
		new GameObject('TREES', 4, 25),
		new GameObject('TREES', 5, 25),
		new GameObject('TREES', 5, 24),
		new GameObject('TREES', 2, 23),
		new GameObject('TREES', 3, 23),
		new GameObject('TREES', 3, 22),
		new GameObject('TREES', 2, 22),
		new GameObject('TREES', 1, 22),
		new GameObject('TREES', 0, 22),
		new GameObject('TREES', 0, 23),
		new GameObject('TREES', 1, 23),
		new GameObject('TREES', 1, 21),
		new GameObject('TREES', 0, 21),
		new GameObject('TREES', 0, 20),
		new GameObject('TREES', 1, 20),
		new GameObject('STONE', 1, 19),
		new GameObject('STONE', 0, 19),
	],
	enemyList: [
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
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
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'HEAVY' },
		{ type: 'HEAVY' },
		{ type: 'HEAVY' },
	],
})
