import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({
		origin: 'https://portfolio-client-eosin.vercel.app',
		credentials: true,
	})

	app.setGlobalPrefix('api')
	await app.listen(5000)
}
bootstrap()
