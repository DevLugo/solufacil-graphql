import { ContractCreateWithoutLoanLeadInput } from './contract-create-without-loan-lead.input';
import { ContractCreateOrConnectWithoutLoanLeadInput } from './contract-create-or-connect-without-loan-lead.input';
import { ContractUpsertWithWhereUniqueWithoutLoanLeadInput } from './contract-upsert-with-where-unique-without-loan-lead.input';
import { ContractCreateManyLoanLeadInputEnvelope } from './contract-create-many-loan-lead-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutLoanLeadInput } from './contract-update-with-where-unique-without-loan-lead.input';
import { ContractUpdateManyWithWhereWithoutLoanLeadInput } from './contract-update-many-with-where-without-loan-lead.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';
export declare class ContractUncheckedUpdateManyWithoutLoanLeadInput {
    create?: Array<ContractCreateWithoutLoanLeadInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutLoanLeadInput>;
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutLoanLeadInput>;
    createMany?: ContractCreateManyLoanLeadInputEnvelope;
    set?: Array<ContractWhereUniqueInput>;
    disconnect?: Array<ContractWhereUniqueInput>;
    delete?: Array<ContractWhereUniqueInput>;
    connect?: Array<ContractWhereUniqueInput>;
    update?: Array<ContractUpdateWithWhereUniqueWithoutLoanLeadInput>;
    updateMany?: Array<ContractUpdateManyWithWhereWithoutLoanLeadInput>;
    deleteMany?: Array<ContractScalarWhereInput>;
}
