import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { parse } from 'dotenv';

async function bootstrap() {
  const envFilePath = __dirname + './../../.env';
  const envFilePath2 = __dirname + './../.env';
  const existsPath = fs.existsSync(envFilePath);
  try {
    const env = existsPath? parse(fs.readFileSync(envFilePath)):parse(fs.readFileSync(envFilePath2));
    let app;
    if(JSON.parse(env['HTTPS'])){
      const httpsOptions = {key: fs.readFileSync(__dirname +'\\key.pem', 'utf8'), 
      cert: fs.readFileSync(__dirname + '\\cert.pem', 'utf8')};
      app = await NestFactory.create(AppModule,{httpsOptions});
    }else{
      app = await NestFactory.create(AppModule);
    }
    await app.listen(process.env.PORT || 3000);
  } catch (error) {
    throw new Error("Invalid .env path on boostrap");
  }
  
  
}
bootstrap();
