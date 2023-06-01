import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import * as express from "express";
import * as path from "path";
async function bootstrap() {
  dotenv.config();
  // console.log(process.env.DATABASE)
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: false, whitelist: true }));
  const staticDir = path.resolve(__dirname, '..', 'uploads');
  app.use('/uploads',express.static(staticDir))
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
