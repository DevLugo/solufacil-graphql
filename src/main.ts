import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { parse } from 'dotenv';
import path from 'path';

async function bootstrap() {
    const v8 = require('v8');
    // Output available memory in GBs
    console.log(v8.getHeapStatistics().heap_size_limit / 1024 ** 3);
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 4000);
}
bootstrap();