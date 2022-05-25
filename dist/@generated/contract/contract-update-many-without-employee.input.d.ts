import { ContractCreateWithoutEmployeeInput } from './contract-create-without-employee.input';
import { ContractCreateOrConnectWithoutEmployeeInput } from './contract-create-or-connect-without-employee.input';
import { ContractUpsertWithWhereUniqueWithoutEmployeeInput } from './contract-upsert-with-where-unique-without-employee.input';
import { ContractCreateManyEmployeeInputEnvelope } from './contract-create-many-employee-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutEmployeeInput } from './contract-update-with-where-unique-without-employee.input';
import { ContractUpdateManyWithWhereWithoutEmployeeInput } from './contract-update-many-with-where-without-employee.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';
export declare class ContractUpdateManyWithoutEmployeeInput {
    create?: Array<ContractCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: ContractCreateManyEmployeeInputEnvelope;
    set?: Array<ContractWhereUniqueInput>;
    disconnect?: Array<ContractWhereUniqueInput>;
    delete?: Array<ContractWhereUniqueInput>;
    connect?: Array<ContractWhereUniqueInput>;
    update?: Array<ContractUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<ContractUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<ContractScalarWhereInput>;
}
