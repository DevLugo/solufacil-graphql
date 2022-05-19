import * as fs from 'fs';
import { parse } from 'dotenv';
import * as path from 'path';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';
    if (isDevelopmentEnv) {
      const envFilePath = path.resolve(".env");
      const existsPath = fs.existsSync(envFilePath);

      if (existsPath) {
        this.envConfig = parse(fs.readFileSync(envFilePath));
      } else {
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