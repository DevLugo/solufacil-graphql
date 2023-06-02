import { Injectable } from '@nestjs/common';
import { LocalCreateInput } from '../../@generated/local/local-create.input';
import { LocalWhereInput } from '../../@generated/local/local-where.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class LocalService {
    constructor(
        private readonly db:PrismaService,

    ){}
    async create(data:LocalCreateInput){
        return await this.db.local.create({
            data: {
                name: data.name,
                borrower:{
                    connect:{
                        id: data.borrower.connect.id
                    }
                }

            }
        });
    }

    async getMany(where: LocalWhereInput){
        return await this.db.local.findMany({where});
    }
}
