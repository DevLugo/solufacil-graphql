import { LocalCreateInput } from 'src/@generated/local/local-create.input';
import { LocalWhereInput } from 'src/@generated/local/local-where.input';
import { PrismaService } from 'src/core/prisma/prisma.service';
export declare class LocalService {
    private readonly db;
    constructor(db: PrismaService);
    create(data: LocalCreateInput): Promise<import(".prisma/client").Local>;
    getMany(where: LocalWhereInput): Promise<import(".prisma/client").Local[]>;
}
