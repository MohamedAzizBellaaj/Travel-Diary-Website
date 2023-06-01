import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import { AppModule } from './app.module';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const swaggerDocumentOptions = new DocumentBuilder()
    .setTitle('Travel Diary')
    .setDescription('Travel Diary Application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({ transform: false, whitelist: true }));
  const staticDir = path.resolve(__dirname, '..', 'uploads');
  app.use('/uploads', express.static(staticDir));
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
