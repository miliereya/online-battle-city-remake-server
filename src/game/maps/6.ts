import { GameObject } from '../init/game-object.init'
import { Map } from '../types'
import { MapInstance } from './map-instance'

export const Map6 = (): Map => ({
	objects: [
		...MapInstance(),
		new GameObject('BRICK', 4, 0),
		new GameObject('BRICK', 5, 0),
		new GameObject('BRICK', 5, 3),
		new GameObject('BRICK', 4, 3),
		new GameObject('BRICK', 4, 4),
		new GameObject('BRICK', 4, 5),
		new GameObject('BRICK', 3, 5),
		new GameObject('BRICK', 3, 4),
		new GameObject('BRICK', 2, 4),
		new GameObject('BRICK', 2, 5),
		new GameObject('BRICK', 2, 6),
		new GameObject('BRICK', 3, 6),
		new GameObject('BRICK', 3, 7),
		new GameObject('BRICK', 2, 7),
		new GameObject('BRICK', 11, 5),
		new GameObject('BRICK', 10, 5),
		new GameObject('BRICK', 14, 5),
		new GameObject('BRICK', 15, 5),
		new GameObject('BRICK', 16, 6),
		new GameObject('BRICK', 17, 6),
		new GameObject('BRICK', 17, 7),
		new GameObject('BRICK', 16, 7),
		new GameObject('BRICK', 16, 8),
		new GameObject('BRICK', 17, 8),
		new GameObject('BRICK', 9, 8),
		new GameObject('BRICK', 8, 8),
		new GameObject('BRICK', 8, 7),
		new GameObject('BRICK', 9, 7),
		new GameObject('BRICK', 9, 6),
		new GameObject('BRICK', 8, 6),
		new GameObject('TREES', 12, 9),
		new GameObject('TREES', 13, 10),
		new GameObject('TREES', 12, 10),
		new GameObject('TREES', 13, 9),
		new GameObject('TREES', 13, 11),
		new GameObject('TREES', 12, 11),
		new GameObject('TREES', 11, 11),
		new GameObject('TREES', 10, 11),
		new GameObject('TREES', 10, 12),
		new GameObject('TREES', 11, 12),
		new GameObject('TREES', 12, 12),
		new GameObject('TREES', 13, 12),
		new GameObject('TREES', 14, 12),
		new GameObject('TREES', 15, 12),
		new GameObject('TREES', 15, 11),
		new GameObject('TREES', 14, 11),
		new GameObject('TREES', 15, 13),
		new GameObject('TREES', 14, 13),
		new GameObject('TREES', 13, 13),
		new GameObject('TREES', 12, 13),
		new GameObject('TREES', 11, 13),
		new GameObject('TREES', 10, 13),
		new GameObject('TREES', 10, 14),
		new GameObject('TREES', 11, 14),
		new GameObject('TREES', 14, 14),
		new GameObject('TREES', 15, 14),
		new GameObject('TREES', 15, 15),
		new GameObject('TREES', 14, 15),
		new GameObject('TREES', 10, 15),
		new GameObject('TREES', 11, 15),
		new GameObject('BRICK', 12, 16),
		new GameObject('BRICK', 13, 16),
		new GameObject('BRICK', 13, 15),
		new GameObject('BRICK', 12, 15),
		new GameObject('BRICK', 12, 17),
		new GameObject('BRICK', 13, 17),
		new GameObject('BRICK', 9, 13),
		new GameObject('BRICK', 9, 12),
		new GameObject('BRICK', 16, 12),
		new GameObject('BRICK', 16, 13),
		new GameObject('STONE', 0, 9),
		new GameObject('STONE', 1, 9),
		new GameObject('STONE', 2, 9),
		new GameObject('STONE', 3, 9),
		new GameObject('STONE', 4, 9),
		new GameObject('STONE', 5, 9),
		new GameObject('STONE', 0, 10),
		new GameObject('STONE', 1, 11),
		new GameObject('STONE', 0, 11),
		new GameObject('STONE', 1, 10),
		new GameObject('BRICK', 2, 11),
		new GameObject('BRICK', 3, 11),
		new GameObject('BRICK', 4, 11),
		new GameObject('BRICK', 5, 11),
		new GameObject('BRICK', 5, 10),
		new GameObject('BRICK', 4, 10),
		new GameObject('BRICK', 3, 10),
		new GameObject('BRICK', 2, 10),
		new GameObject('BRICK', 23, 10),
		new GameObject('BRICK', 23, 11),
		new GameObject('BRICK', 22, 11),
		new GameObject('BRICK', 22, 10),
		new GameObject('STONE', 24, 11),
		new GameObject('STONE', 25, 10),
		new GameObject('STONE', 24, 10),
		new GameObject('STONE', 25, 11),
		new GameObject('STONE', 25, 9),
		new GameObject('STONE', 24, 9),
		new GameObject('STONE', 23, 9),
		new GameObject('STONE', 22, 9),
		new GameObject('STONE', 20, 9),
		new GameObject('STONE', 21, 9),
		new GameObject('BRICK', 21, 10),
		new GameObject('BRICK', 20, 10),
		new GameObject('BRICK', 19, 10),
		new GameObject('BRICK', 19, 11),
		new GameObject('BRICK', 20, 11),
		new GameObject('BRICK', 21, 11),
		new GameObject('BRICK', 25, 14),
		new GameObject('BRICK', 24, 14),
		new GameObject('BRICK', 23, 14),
		new GameObject('BRICK', 22, 14),
		new GameObject('BRICK', 21, 14),
		new GameObject('BRICK', 21, 15),
		new GameObject('BRICK', 22, 15),
		new GameObject('BRICK', 23, 15),
		new GameObject('BRICK', 24, 15),
		new GameObject('BRICK', 25, 15),
		new GameObject('BRICK', 22, 18),
		new GameObject('BRICK', 23, 18),
		new GameObject('BRICK', 23, 19),
		new GameObject('BRICK', 22, 19),
		new GameObject('BRICK', 23, 20),
		new GameObject('BRICK', 23, 21),
		new GameObject('BRICK', 23, 22),
		new GameObject('BRICK', 23, 23),
		new GameObject('BRICK', 20, 22),
		new GameObject('BRICK', 20, 20),
		new GameObject('BRICK', 20, 21),
		new GameObject('BRICK', 20, 23),
		new GameObject('TREES', 25, 23),
		new GameObject('TREES', 24, 23),
		new GameObject('TREES', 24, 22),
		new GameObject('TREES', 25, 21),
		new GameObject('TREES', 25, 22),
		new GameObject('TREES', 24, 21),
		new GameObject('TREES', 25, 20),
		new GameObject('TREES', 24, 19),
		new GameObject('TREES', 24, 20),
		new GameObject('TREES', 25, 19),
		new GameObject('TREES', 24, 18),
		new GameObject('TREES', 25, 17),
		new GameObject('TREES', 25, 18),
		new GameObject('TREES', 25, 16),
		new GameObject('TREES', 24, 16),
		new GameObject('TREES', 24, 17),
		new GameObject('TREES', 23, 16),
		new GameObject('TREES', 22, 16),
		new GameObject('TREES', 23, 17),
		new GameObject('TREES', 22, 17),
		new GameObject('TREES', 19, 19),
		new GameObject('TREES', 18, 20),
		new GameObject('TREES', 18, 19),
		new GameObject('TREES', 19, 20),
		new GameObject('TREES', 18, 21),
		new GameObject('TREES', 19, 22),
		new GameObject('TREES', 19, 21),
		new GameObject('TREES', 18, 22),
		new GameObject('TREES', 19, 23),
		new GameObject('TREES', 18, 23),
		new GameObject('TREES', 18, 24),
		new GameObject('TREES', 19, 25),
		new GameObject('TREES', 18, 25),
		new GameObject('TREES', 19, 24),
		new GameObject('TREES', 17, 25),
		new GameObject('TREES', 16, 25),
		new GameObject('TREES', 16, 24),
		new GameObject('TREES', 17, 24),
		new GameObject('BRICK', 17, 23),
		new GameObject('BRICK', 17, 22),
		new GameObject('BRICK', 17, 21),
		new GameObject('BRICK', 17, 20),
		new GameObject('BRICK', 17, 19),
		new GameObject('BRICK', 16, 19),
		new GameObject('BRICK', 16, 18),
		new GameObject('BRICK', 17, 18),
		new GameObject('STONE', 18, 18),
		new GameObject('STONE', 18, 17),
		new GameObject('BRICK', 14, 25),
		new GameObject('BRICK', 14, 24),
		new GameObject('BRICK', 11, 24),
		new GameObject('BRICK', 11, 25),
		new GameObject('BRICK', 2, 23),
		new GameObject('BRICK', 2, 22),
		new GameObject('BRICK', 2, 21),
		new GameObject('BRICK', 0, 14),
		new GameObject('BRICK', 0, 15),
		new GameObject('BRICK', 1, 15),
		new GameObject('BRICK', 2, 15),
		new GameObject('BRICK', 3, 15),
		new GameObject('BRICK', 4, 15),
		new GameObject('BRICK', 4, 14),
		new GameObject('BRICK', 3, 14),
		new GameObject('BRICK', 2, 14),
		new GameObject('BRICK', 1, 14),
		new GameObject('BRICK', 2, 20),
		new GameObject('BRICK', 2, 19),
		new GameObject('BRICK', 2, 18),
		new GameObject('BRICK', 3, 18),
		new GameObject('BRICK', 3, 19),
		new GameObject('STONE', 5, 23),
		new GameObject('STONE', 5, 22),
		new GameObject('STONE', 5, 21),
		new GameObject('STONE', 5, 20),
		new GameObject('BRICK', 8, 23),
		new GameObject('BRICK', 8, 22),
		new GameObject('BRICK', 8, 21),
		new GameObject('BRICK', 8, 20),
		new GameObject('BRICK', 8, 19),
		new GameObject('BRICK', 8, 18),
		new GameObject('BRICK', 9, 18),
		new GameObject('BRICK', 9, 19),
		new GameObject('BRICK', 7, 17),
		new GameObject('BRICK', 7, 16),
		new GameObject('STONE', 8, 17),
		new GameObject('STONE', 9, 17),
		new GameObject('STONE', 12, 19),
		new GameObject('STONE', 13, 19),
		new GameObject('STONE', 13, 18),
		new GameObject('STONE', 12, 18),
		new GameObject('BRICK', 12, 21),
		new GameObject('BRICK', 13, 20),
		new GameObject('BRICK', 12, 20),
		new GameObject('BRICK', 13, 21),
		new GameObject('BRICK', 13, 14),
		new GameObject('BRICK', 12, 14),
		new GameObject('TREES', 10, 10),
		new GameObject('TREES', 11, 10),
		new GameObject('TREES', 12, 8),
		new GameObject('TREES', 13, 8),
		new GameObject('TREES', 14, 10),
		new GameObject('TREES', 15, 10),
		new GameObject('BRICK', 8, 11),
		new GameObject('BRICK', 9, 11),
		new GameObject('BRICK', 16, 11),
		new GameObject('BRICK', 17, 11),
		new GameObject('BRICK', 21, 0),
		new GameObject('BRICK', 20, 0),
		new GameObject('BRICK', 21, 4),
		new GameObject('BRICK', 22, 4),
		new GameObject('BRICK', 23, 4),
		new GameObject('BRICK', 23, 5),
		new GameObject('BRICK', 22, 5),
		new GameObject('BRICK', 21, 5),
		new GameObject('TREES', 24, 5),
		new GameObject('TREES', 25, 5),
		new GameObject('TREES', 24, 4),
		new GameObject('TREES', 25, 3),
		new GameObject('TREES', 25, 2),
		new GameObject('TREES', 25, 1),
		new GameObject('TREES', 25, 0),
		new GameObject('TREES', 24, 0),
		new GameObject('TREES', 24, 1),
		new GameObject('TREES', 24, 2),
		new GameObject('TREES', 24, 3),
		new GameObject('TREES', 25, 4),
		new GameObject('TREES', 23, 2),
		new GameObject('TREES', 23, 1),
		new GameObject('TREES', 23, 0),
		new GameObject('TREES', 22, 0),
		new GameObject('TREES', 22, 1),
		new GameObject('TREES', 22, 2),
		new GameObject('TREES', 22, 3),
		new GameObject('TREES', 23, 3),
		new GameObject('TREES', 21, 3),
		new GameObject('TREES', 20, 3),
		new GameObject('TREES', 20, 2),
		new GameObject('TREES', 21, 2),
	],
	enemyList: [
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
		{ type: 'NORMAL' },
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
		{ type: 'HEAVY' },
		{ type: 'HEAVY' },
	],
})
