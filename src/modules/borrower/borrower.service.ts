import { Injectable } from '@nestjs/common';
import { BorrowerCreateInput } from '../../@generated/prisma-nestjs-graphql/borrower/borrower-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class BorrowerService {
    constructor(private readonly db: PrismaService) {}

    async create(data: BorrowerCreateInput) {
        return await this.db.borrower.create({data});
    }
      
    async getMany() {
        return await this.db.borrower.findMany();
    }

}
