import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc'; // import UTC plugin
import * as timezone from 'dayjs/plugin/timezone'; // import timezone plugin


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Village Fund')
    .setDescription('Api Village Fund')
    .setVersion('1.0')
    .addTag('Api') // Optional: Add tags for better organization
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Asia/Bangkok');
  app.enableCors();
  await app.listen(process.env.APP_PORT);
}
bootstrap();
