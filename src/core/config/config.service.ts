import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';
    console.log("SSSS")
    if (isDevelopmentEnv) {
      const envFilePath = __dirname + './../../../../.env';
      const envFilePath2 = __dirname + './../../../.env';
      console.log(envFilePath)
      console.log(envFilePath2)

      const existsPath = fs.existsSync(envFilePath);

        console.log(envFilePath);
      if (existsPath) {
        this.envConfig = parse(fs.readFileSync(envFilePath));
      }else if (envFilePath2){
        this.envConfig = parse(fs.readFileSync(envFilePath2));
      }else{
        console.log('.env file does not exist');
        process.exit(0);
      }
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}