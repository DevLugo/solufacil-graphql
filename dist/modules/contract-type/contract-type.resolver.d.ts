import { ContractTypeCreateInput } from '../../@generated/contract-type/contract-type-create.input';
import { ContractTypeService } from './contract-type.service';
export declare class ContractTypeResolver {
    private readonly contractTypeService;
    constructor(contractTypeService: ContractTypeService);
    contractTypes(): Promise<import(".prisma/client").ContractType[]>;
    createContractType(data: ContractTypeCreateInput): Promise<import(".prisma/client").ContractType>;
}
