import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  dotenv.config();
  // console.log(process.env.DATABASE)
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: false,whitelist:true }));

  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
