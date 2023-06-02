import { Injectable } from '@nestjs/common';
import { LoantypeWhereInput } from '../../../@generated/loantype/loantype-where.input';
import { LoantypeCreateInput } from '../../../@generated/loantype/loantype-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';

@Injectable()
export class LoanTypeService {
    constructor(private readonly db:PrismaService){}

    async getMany(where:LoantypeWhereInput){
        return await this.db.loantype.findMany({where});
    }

    async get(id:string){
        return await this.db.loantype.findUnique({where:{id}});
    }

    async create(data:LoantypeCreateInput){
        // @ts-ignore
        return await this.db.loantype.create({data});
    }
}
