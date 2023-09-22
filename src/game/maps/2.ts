import { GameObject } from '../init'
import { Map } from '../types'
import { MapInstance } from './map-instance'

export const Map2 = (): Map => ({
	objects: [
		...MapInstance(),
		new GameObject('BRICK', 13, 14),
		new GameObject('BRICK', 11, 15),
		new GameObject('BRICK', 12, 14),
		new GameObject('BRICK', 12, 15),
		new GameObject('BRICK', 13, 15),
		new GameObject('BRICK', 2, 0),
		new GameObject('BRICK', 2, 1),
		new GameObject('BRICK', 3, 1),
		new GameObject('BRICK', 3, 0),
		new GameObject('BRICK', 3, 2),
		new GameObject('BRICK', 2, 2),
		new GameObject('BRICK', 2, 3),
		new GameObject('BRICK', 3, 3),
		new GameObject('BRICK', 7, 0),
		new GameObject('BRICK', 7, 1),
		new GameObject('BRICK', 6, 1),
		new GameObject('BRICK', 6, 0),
		new GameObject('BRICK', 7, 4),
		new GameObject('BRICK', 6, 4),
		new GameObject('BRICK', 6, 5),
		new GameObject('BRICK', 7, 5),
		new GameObject('BRICK', 7, 6),
		new GameObject('BRICK', 6, 6),
		new GameObject('BRICK', 6, 7),
		new GameObject('BRICK', 7, 7),
		new GameObject('STONE', 7, 8),
		new GameObject('STONE', 6, 8),
		new GameObject('STONE', 6, 9),
		new GameObject('STONE', 7, 9),
		new GameObject('STONE', 7, 10),
		new GameObject('STONE', 6, 10),
		new GameObject('STONE', 6, 11),
		new GameObject('STONE', 7, 11),
		new GameObject('BRICK', 7, 12),
		new GameObject('BRICK', 6, 12),
		new GameObject('BRICK', 6, 13),
		new GameObject('BRICK', 7, 13),
		new GameObject('BRICK', 5, 13),
		new GameObject('BRICK', 4, 13),
		new GameObject('BRICK', 3, 13),
		new GameObject('BRICK', 2, 13),
		new GameObject('BRICK', 2, 12),
		new GameObject('BRICK', 3, 12),
		new GameObject('BRICK', 4, 12),
		new GameObject('BRICK', 5, 12),
		new GameObject('BRICK', 3, 4),
		new GameObject('BRICK', 2, 4),
		new GameObject('BRICK', 2, 5),
		new GameObject('BRICK', 3, 5),
		new GameObject('BRICK', 3, 6),
		new GameObject('BRICK', 2, 6),
		new GameObject('BRICK', 2, 7),
		new GameObject('BRICK', 3, 7),
		new GameObject('BRICK', 3, 8),
		new GameObject('BRICK', 2, 8),
		new GameObject('BRICK', 2, 9),
		new GameObject('BRICK', 3, 9),
		new GameObject('STONE', 1, 9),
		new GameObject('STONE', 0, 9),
		new GameObject('STONE', 0, 8),
		new GameObject('STONE', 1, 8),
		new GameObject('TREES', 2, 14),
		new GameObject('TREES', 2, 15),
		new GameObject('TREES', 1, 15),
		new GameObject('TREES', 0, 14),
		new GameObject('TREES', 0, 15),
		new GameObject('TREES', 0, 16),
		new GameObject('TREES', 1, 16),
		new GameObject('TREES', 1, 17),
		new GameObject('TREES', 0, 17),
		new GameObject('TREES', 1, 14),
		new GameObject('TREES', 3, 14),
		new GameObject('TREES', 3, 15),
		new GameObject('BRICK', 7, 16),
		new GameObject('BRICK', 6, 16),
		new GameObject('BRICK', 6, 17),
		new GameObject('BRICK', 7, 17),
		new GameObject('BRICK', 7, 18),
		new GameObject('BRICK', 6, 18),
		new GameObject('BRICK', 6, 19),
		new GameObject('BRICK', 7, 19),
		new GameObject('BRICK', 2, 20),
		new GameObject('BRICK', 3, 20),
		new GameObject('BRICK', 3, 21),
		new GameObject('BRICK', 2, 21),
		new GameObject('BRICK', 2, 22),
		new GameObject('BRICK', 3, 22),
		new GameObject('BRICK', 3, 23),
		new GameObject('BRICK', 2, 23),
		new GameObject('STONE', 6, 23),
		new GameObject('STONE', 7, 23),
		new GameObject('STONE', 7, 22),
		new GameObject('STONE', 6, 22),
		new GameObject('STONE', 7, 24),
		new GameObject('STONE', 7, 25),
		new GameObject('STONE', 6, 25),
		new GameObject('STONE', 6, 24),
		new GameObject('BRICK', 12, 21),
		new GameObject('BRICK', 13, 21),
		new GameObject('BRICK', 13, 20),
		new GameObject('BRICK', 12, 20),
		new GameObject('BRICK', 14, 20),
		new GameObject('BRICK', 14, 21),
		new GameObject('BRICK', 15, 21),
		new GameObject('BRICK', 15, 20),
		new GameObject('BRICK', 15, 22),
		new GameObject('BRICK', 14, 22),
		new GameObject('BRICK', 14, 23),
		new GameObject('BRICK', 15, 23),
		new GameObject('STONE', 15, 24),
		new GameObject('STONE', 15, 25),
		new GameObject('STONE', 14, 24),
		new GameObject('STONE', 14, 25),
		new GameObject('BRICK', 18, 23),
		new GameObject('BRICK', 18, 22),
		new GameObject('BRICK', 19, 22),
		new GameObject('BRICK', 19, 23),
		new GameObject('BRICK', 19, 21),
		new GameObject('BRICK', 18, 21),
		new GameObject('BRICK', 18, 20),
		new GameObject('BRICK', 19, 20),
		new GameObject('STONE', 20, 21),
		new GameObject('STONE', 21, 21),
		new GameObject('STONE', 21, 20),
		new GameObject('STONE', 20, 20),
		new GameObject('BRICK', 22, 23),
		new GameObject('BRICK', 22, 22),
		new GameObject('BRICK', 22, 21),
		new GameObject('BRICK', 22, 20),
		new GameObject('BRICK', 23, 20),
		new GameObject('BRICK', 23, 21),
		new GameObject('BRICK', 23, 22),
		new GameObject('BRICK', 23, 23),
		new GameObject('STONE', 19, 19),
		new GameObject('STONE', 18, 19),
		new GameObject('STONE', 18, 18),
		new GameObject('STONE', 19, 18),
		new GameObject('BRICK', 18, 17),
		new GameObject('BRICK', 19, 17),
		new GameObject('BRICK', 19, 16),
		new GameObject('BRICK', 18, 16),
		new GameObject('TREES', 20, 17),
		new GameObject('TREES', 21, 17),
		new GameObject('TREES', 21, 16),
		new GameObject('TREES', 20, 16),
		new GameObject('TREES', 20, 15),
		new GameObject('TREES', 21, 15),
		new GameObject('TREES', 20, 14),
		new GameObject('TREES', 21, 14),
		new GameObject('TREES', 21, 13),
		new GameObject('TREES', 20, 13),
		new GameObject('TREES', 21, 12),
		new GameObject('TREES', 20, 12),
		new GameObject('BRICK', 22, 17),
		new GameObject('BRICK', 23, 16),
		new GameObject('BRICK', 22, 16),
		new GameObject('BRICK', 23, 17),
		new GameObject('STONE', 24, 17),
		new GameObject('STONE', 25, 17),
		new GameObject('STONE', 24, 16),
		new GameObject('STONE', 25, 16),
		new GameObject('BRICK', 22, 13),
		new GameObject('BRICK', 23, 12),
		new GameObject('BRICK', 22, 12),
		new GameObject('BRICK', 23, 13),
		new GameObject('BRICK', 23, 11),
		new GameObject('BRICK', 22, 11),
		new GameObject('BRICK', 19, 11),
		new GameObject('BRICK', 18, 11),
		new GameObject('BRICK', 18, 10),
		new GameObject('BRICK', 19, 10),
		new GameObject('BRICK', 22, 10),
		new GameObject('BRICK', 23, 10),
		new GameObject('BRICK', 23, 9),
		new GameObject('BRICK', 22, 9),
		new GameObject('BRICK', 22, 8),
		new GameObject('BRICK', 23, 8),
		new GameObject('BRICK', 23, 7),
		new GameObject('BRICK', 22, 7),
		new GameObject('BRICK', 23, 6),
		new GameObject('BRICK', 22, 6),
		new GameObject('BRICK', 19, 7),
		new GameObject('BRICK', 18, 7),
		new GameObject('BRICK', 18, 6),
		new GameObject('BRICK', 19, 6),
		new GameObject('STONE', 20, 7),
		new GameObject('STONE', 21, 7),
		new GameObject('STONE', 21, 6),
		new GameObject('STONE', 20, 6),
		new GameObject('BRICK', 18, 2),
		new GameObject('BRICK', 18, 1),
		new GameObject('BRICK', 18, 0),
		new GameObject('BRICK', 19, 0),
		new GameObject('BRICK', 19, 1),
		new GameObject('BRICK', 19, 2),
		new GameObject('BRICK', 19, 3),
		new GameObject('BRICK', 18, 3),
		new GameObject('BRICK', 20, 1),
		new GameObject('BRICK', 21, 1),
		new GameObject('BRICK', 20, 0),
		new GameObject('BRICK', 21, 0),
		new GameObject('BRICK', 22, 0),
		new GameObject('BRICK', 22, 1),
		new GameObject('BRICK', 22, 2),
		new GameObject('BRICK', 22, 3),
		new GameObject('BRICK', 23, 3),
		new GameObject('BRICK', 23, 2),
		new GameObject('BRICK', 23, 1),
		new GameObject('BRICK', 23, 0),
		new GameObject('BRICK', 15, 4),
		new GameObject('BRICK', 14, 4),
		new GameObject('BRICK', 13, 4),
		new GameObject('BRICK', 12, 4),
		new GameObject('BRICK', 11, 4),
		new GameObject('BRICK', 10, 4),
		new GameObject('BRICK', 10, 5),
		new GameObject('BRICK', 11, 5),
		new GameObject('BRICK', 12, 5),
		new GameObject('BRICK', 13, 5),
		new GameObject('BRICK', 14, 5),
		new GameObject('BRICK', 15, 5),
		new GameObject('BRICK', 15, 6),
		new GameObject('BRICK', 15, 7),
		new GameObject('BRICK', 14, 7),
		new GameObject('BRICK', 13, 7),
		new GameObject('BRICK', 12, 7),
		new GameObject('BRICK', 11, 7),
		new GameObject('BRICK', 10, 7),
		new GameObject('BRICK', 10, 6),
		new GameObject('BRICK', 11, 6),
		new GameObject('BRICK', 12, 6),
		new GameObject('BRICK', 13, 6),
		new GameObject('BRICK', 14, 6),
		new GameObject('BRICK', 14, 8),
		new GameObject('BRICK', 15, 8),
		new GameObject('BRICK', 15, 9),
		new GameObject('BRICK', 14, 10),
		new GameObject('BRICK', 14, 9),
		new GameObject('BRICK', 15, 10),
		new GameObject('BRICK', 14, 11),
		new GameObject('BRICK', 15, 11),
		new GameObject('BRICK', 11, 11),
		new GameObject('BRICK', 10, 11),
		new GameObject('BRICK', 10, 10),
		new GameObject('BRICK', 11, 10),
		new GameObject('BRICK', 11, 9),
		new GameObject('BRICK', 10, 9),
		new GameObject('BRICK', 10, 8),
		new GameObject('BRICK', 11, 8),
		new GameObject('STONE', 15, 12),
		new GameObject('STONE', 14, 12),
		new GameObject('STONE', 15, 13),
		new GameObject('STONE', 16, 14),
		new GameObject('STONE', 17, 14),
		new GameObject('STONE', 17, 15),
		new GameObject('STONE', 16, 15),
		new GameObject('STONE', 14, 13),
		new GameObject('TREES', 13, 13),
		new GameObject('TREES', 13, 12),
		new GameObject('TREES', 12, 13),
		new GameObject('TREES', 11, 13),
		new GameObject('TREES', 11, 12),
		new GameObject('TREES', 12, 12),
		new GameObject('TREES', 10, 12),
		new GameObject('TREES', 10, 13),
		new GameObject('TREES', 9, 13),
		new GameObject('TREES', 8, 13),
		new GameObject('TREES', 8, 12),
		new GameObject('TREES', 9, 12),
		new GameObject('TREES', 9, 11),
		new GameObject('TREES', 8, 11),
		new GameObject('TREES', 8, 10),
		new GameObject('TREES', 9, 10),
		new GameObject('BRICK', 10, 14),
		new GameObject('BRICK', 11, 14),
		new GameObject('BRICK', 10, 15),
		new GameObject('BRICK', 11, 15),
		new GameObject('STONE', 12, 16),
		new GameObject('STONE', 12, 17),
		new GameObject('STONE', 13, 17),
		new GameObject('STONE', 13, 16),
	],
	enemyList: [
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
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
	],
})
