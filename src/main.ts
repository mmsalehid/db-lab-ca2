import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The Cats API description')
    .addTag('cats')
    .build()
  
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

