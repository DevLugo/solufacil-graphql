import { Injectable } from '@nestjs/common';
import { LocalCreateInput } from '@generated/prisma-nestjs-graphql/local/local-create.input';
import { LocalWhereInput } from '@generated/prisma-nestjs-graphql/local/local-where.input';
import { PrismaService } from 'core/prisma/prisma.service';

@Injectable()
export class LocalService {
    constructor(
        private readonly db:PrismaService,

    ){}
    async create(data:LocalCreateInput){
        return await this.db.local.create({data});
    }

    async getMany(where: LocalWhereInput){
        return await this.db.local.findMany({where});
    }
}
