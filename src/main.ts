import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { UserInputError } from 'apollo-server-express';
import * as fs from 'fs';

async function bootstrap() {
    const v8 = require('v8');
    // Output available memory in GBsss
    console.log(v8.getHeapStatistics().heap_size_limit / 1024 ** 3);
    const app = await NestFactory.create(AppModule, {snapshot:true,   abortOnError: false });
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();


    /* app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        exceptionFactory: (errors: ValidationError[]) => {
          return new UserInputError('VALIDATION_ERROR', {
            invalidArgs: errors,
          });
        },
      }),    ); */
    //app.useGlobalPipes(new ValidationPipe());

    await app.listen(4000, '0.0.0.0');
  }
bootstrap().catch((err) => {
  fs.writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
  process.exit(1);
});
