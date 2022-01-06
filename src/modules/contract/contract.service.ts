import { Injectable } from '@nestjs/common';
import { ContractCreateInput } from '../../@generated/prisma-nestjs-graphql/contract/contract-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class ContractService {
    constructor(private readonly db: PrismaService){}

    async create(data: ContractCreateInput) {
        return await this.db.contract.create({data});
    }

    async getMany() {
        return await this.db.contract.findMany();
    }
}