import { Injectable } from '@nestjs/common';
import { LoantypeWhereInput } from '../../../@generated/prisma-nestjs-graphql/loantype/loantype-where.input';
import { LoantypeCreateInput } from '../../../@generated/prisma-nestjs-graphql/loantype/loantype-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';

@Injectable()
export class LoanTypeService {
    constructor(private readonly db:PrismaService){}

    async getMany(where:LoantypeWhereInput){
        return await this.db.loantype.findMany({where});
    }

    async create(data:LoantypeCreateInput){
        return await this.db.loantype.create({data});
    }
}
