import { Module } from '@nestjs/common'
import { GameService } from './game.service'
import { GameGateway } from './game.gateway'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				CLIENT_URL: Joi.string().required(),
			}),
		}),
	],
	providers: [GameService, GameGateway],
})
export class GameModule {}
