import { ContractCreateWithoutContractTypeInput } from './contract-create-without-contract-type.input';
import { ContractCreateOrConnectWithoutContractTypeInput } from './contract-create-or-connect-without-contract-type.input';
import { ContractUpsertWithWhereUniqueWithoutContractTypeInput } from './contract-upsert-with-where-unique-without-contract-type.input';
import { ContractCreateManyContractTypeInputEnvelope } from './contract-create-many-contract-type-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutContractTypeInput } from './contract-update-with-where-unique-without-contract-type.input';
import { ContractUpdateManyWithWhereWithoutContractTypeInput } from './contract-update-many-with-where-without-contract-type.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';
export declare class ContractUpdateManyWithoutContractTypeInput {
    create?: Array<ContractCreateWithoutContractTypeInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutContractTypeInput>;
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutContractTypeInput>;
    createMany?: ContractCreateManyContractTypeInputEnvelope;
    set?: Array<ContractWhereUniqueInput>;
    disconnect?: Array<ContractWhereUniqueInput>;
    delete?: Array<ContractWhereUniqueInput>;
    connect?: Array<ContractWhereUniqueInput>;
    update?: Array<ContractUpdateWithWhereUniqueWithoutContractTypeInput>;
    updateMany?: Array<ContractUpdateManyWithWhereWithoutContractTypeInput>;
    deleteMany?: Array<ContractScalarWhereInput>;
}
