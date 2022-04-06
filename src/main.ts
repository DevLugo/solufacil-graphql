import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { parse } from 'dotenv';

async function bootstrap() {
  const envFilePath = `${__dirname.replace("/dist", '')}/../.env`;
  const keyFilePath = `${__dirname.replace("/dist", '')}/key.pem`;
  const secretFilePath = `${__dirname.replace("/dist", '')}/cert.pem`;

  try {
    const env = parse(fs.readFileSync(envFilePath))
    let app;
    if (false) {
      const httpsOptions = {
        key: fs.readFileSync(keyFilePath, 'utf8'),
        cert: fs.readFileSync(secretFilePath, 'utf8')
      };
      app = await NestFactory.create(AppModule, { httpsOptions });
    } else {
      app = await NestFactory.create(AppModule);
    }
    await app.listen(process.env.PORT || 4000);
  } catch (error) {
    console.log(error);
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 4000);
  }
}
bootstrap();