"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const v8 = require('v8');
    console.log(v8.getHeapStatistics().heap_size_limit / 1024 ** 3);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map