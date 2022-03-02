import { Injectable } from '@nestjs/common';
import { LocalCreateInput } from 'src/@generated/prisma-nestjs-graphql/local/local-create.input';
import { LocalWhereInput } from 'src/@generated/prisma-nestjs-graphql/local/local-where.input';
import { PrismaService } from 'src/core/prisma/prisma.service';

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
