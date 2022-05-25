import { ContractTypeCreateInput } from '../../@generated/contract-type/contract-type-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
export declare class ContractTypeService {
    private readonly db;
    constructor(db: PrismaService);
    create(data: ContractTypeCreateInput): import(".prisma/client").Prisma.Prisma__ContractTypeClient<import(".prisma/client").ContractType>;
    getMany(): Promise<import(".prisma/client").ContractType[]>;
}
