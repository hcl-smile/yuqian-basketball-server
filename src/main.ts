import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('basketball接口文档')
    .setDescription('basketball接口文档')
    .setVersion('1.0')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
