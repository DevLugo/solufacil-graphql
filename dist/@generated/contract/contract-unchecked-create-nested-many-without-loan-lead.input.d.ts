import { ContractCreateWithoutLoanLeadInput } from './contract-create-without-loan-lead.input';
import { ContractCreateOrConnectWithoutLoanLeadInput } from './contract-create-or-connect-without-loan-lead.input';
import { ContractCreateManyLoanLeadInputEnvelope } from './contract-create-many-loan-lead-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
export declare class ContractUncheckedCreateNestedManyWithoutLoanLeadInput {
    create?: Array<ContractCreateWithoutLoanLeadInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutLoanLeadInput>;
    createMany?: ContractCreateManyLoanLeadInputEnvelope;
    connect?: Array<ContractWhereUniqueInput>;
}
