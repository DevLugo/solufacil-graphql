import { ContractWhereInput } from 'src/@generated/contract/contract-where.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ContractCreateInput } from './inputs/contractCreateInput';
export declare class ContractService {
    private readonly _db;
    constructor(_db: PrismaService);
    create(data: ContractCreateInput): Promise<import(".prisma/client").Contract & {
        borrower: import(".prisma/client").Borrower;
        contractType: import(".prisma/client").ContractType;
    }>;
    getMany(where: ContractWhereInput): Promise<(import(".prisma/client").Contract & {
        borrower: import(".prisma/client").Borrower;
        contractType: import(".prisma/client").ContractType;
    })[]>;
}
