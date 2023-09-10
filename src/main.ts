import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({
		origin: process.env.CORS_ALLOW_ORIGIN ?? 'http://localhost:3000',
		credentials: true,
	})

	app.setGlobalPrefix('api')
	await app.listen(5000)
}
bootstrap()
