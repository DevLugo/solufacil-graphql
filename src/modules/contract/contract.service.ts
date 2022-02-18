import { Injectable } from '@nestjs/common';
import { ContractCreateInput } from '../../@generated/prisma-nestjs-graphql/contract/contract-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class ContractService {
    constructor(private readonly _db: PrismaService){}

    async create(data: ContractCreateInput) {
        return await this._db.contract.create(
            {data: {
                amount: data.amount,
                dueDate: new Date(data.dueDate),
                signDate: new Date(data.dueDate),
                employee: data.employee,
                borrower: data.borrower
        }});
    }

    async getMany() {
        return await this._db.contract.findMany();
    }
}