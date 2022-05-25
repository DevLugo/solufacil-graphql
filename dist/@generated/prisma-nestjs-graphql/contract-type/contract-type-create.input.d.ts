import { Decimal } from '@prisma/client/runtime';
import { ContractCreateNestedManyWithoutContractTypeInput } from '../contract/contract-create-nested-many-without-contract-type.input';
export declare class ContractTypeCreateInput {
    id?: string;
    name: string;
    monthDuration: number;
    amount: Decimal;
    maxRate: Decimal;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contract?: ContractCreateNestedManyWithoutContractTypeInput;
}
