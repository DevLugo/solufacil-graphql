import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const v8 = require('v8');
    // Output available memory in GBsss
    console.log(v8.getHeapStatistics().heap_size_limit / 1024 ** 3);
    const app = await NestFactory.create(AppModule);
    await app.listen(4000, '0.0.0.0');
  }
bootstrap();
