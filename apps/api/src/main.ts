import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
async function bootstrap() {
  dotenv.config();
  // console.log(process.env.DATABASE)
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: false, whitelist: true }));

  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
