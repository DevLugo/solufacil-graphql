import { ContractWhereInput } from 'src/@generated/contract/contract-where.input';
import { ContractService } from './contract.service';
import { ContractCreateInput } from './inputs/contractCreateInput';
export declare class ContractResolver {
    private readonly ContractService;
    constructor(ContractService: ContractService);
    contracts(where: ContractWhereInput): Promise<(import(".prisma/client").Contract & {
        borrower: import(".prisma/client").Borrower;
        contractType: import(".prisma/client").ContractType;
    })[]>;
    createContract(data: ContractCreateInput): Promise<import(".prisma/client").Contract & {
        borrower: import(".prisma/client").Borrower;
        contractType: import(".prisma/client").ContractType;
    }>;
}
