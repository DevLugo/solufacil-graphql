import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { CoreModule } from './core/core.module';
import { PrismaService } from './core/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { LocationModule } from './modules/location/location.module';
import { PersonalDataModule } from './modules/personal-data/personal-data.module';
import { RouteModule } from './modules/route/route.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    RouteModule,
    EmployeeModule,
    LocationModule,
    PersonalDataModule,
  ],
  providers: [PrismaService, AppResolver],
})
export class AppModule { }
