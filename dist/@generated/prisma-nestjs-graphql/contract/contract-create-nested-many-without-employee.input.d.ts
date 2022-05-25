import { ContractCreateWithoutEmployeeInput } from './contract-create-without-employee.input';
import { ContractCreateOrConnectWithoutEmployeeInput } from './contract-create-or-connect-without-employee.input';
import { ContractCreateManyEmployeeInputEnvelope } from './contract-create-many-employee-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
export declare class ContractCreateNestedManyWithoutEmployeeInput {
    create?: Array<ContractCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutEmployeeInput>;
    createMany?: ContractCreateManyEmployeeInputEnvelope;
    connect?: Array<ContractWhereUniqueInput>;
}
