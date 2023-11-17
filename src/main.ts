import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Clientes API')
    .setDescription('API para el manejo de clientes')
    .setVersion('1.0')
    .addTag('Clientes', 'CRUD de clientes')
    .addTag('Auth', 'Autenticación de usuarios')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(5000);
}
bootstrap();
