import { GameObject } from './game-object.init'
import { Player } from './player.init'
import { Bullet } from './bullet.init'

export class Game {
	id: string
	objects: GameObject[]
	isPaused: boolean = false
	p1: Player
	p2: Player
	bullets: Bullet[] = []
	constructor(id: string, objects: GameObject[], p1: string, p2: string) {
		this.id = id
		this.isPaused = false
		this.objects = objects
		this.p1 = new Player('left', p1)
		this.p2 = new Player('right', p2)
	}
}
