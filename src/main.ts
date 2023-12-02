import { NestFactory } from '@nestjs/core'
import { GameModule } from './game/game.module'

async function bootstrap() {
	const app = await NestFactory.create(GameModule)
	app.setGlobalPrefix('api')
	await app.listen(5000)
}
bootstrap()
