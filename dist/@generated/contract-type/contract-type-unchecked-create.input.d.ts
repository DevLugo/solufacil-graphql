import { Decimal } from '@prisma/client/runtime';
import { ContractUncheckedCreateNestedManyWithoutContractTypeInput } from '../contract/contract-unchecked-create-nested-many-without-contract-type.input';
export declare class ContractTypeUncheckedCreateInput {
    id?: string;
    name: string;
    monthDuration: number;
    amount: Decimal;
    maxRate: Decimal;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contract?: ContractUncheckedCreateNestedManyWithoutContractTypeInput;
}
