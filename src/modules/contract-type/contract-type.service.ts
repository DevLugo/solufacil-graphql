import { Injectable } from '@nestjs/common';
import { ContractTypeCreateInput } from '../../@generated/contract-type/contract-type-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class ContractTypeService {
    constructor(private readonly db: PrismaService) {}

    create(data: ContractTypeCreateInput){
      return this.db.contractType.create(
        {
          data: {
            amount:data.amount,
            maxRate: data.maxRate,
            monthDuration: data.monthDuration,
            name: data.name
          }
        }
      );
    }
    
    async getMany() {
        return await this.db.contractType.findMany();
      }
}
