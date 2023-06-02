
import { Module } from '@nestjs/common';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { LoanRenovationResolver } from './loan-renovation.resolver';
import { LoanRenovationService } from './loan-renovation.service';
@Module({
  providers: [LoanRenovationResolver, LoanRenovationService],
  imports: [PrismaModule]

})
export class LoanRenovationModule {}





