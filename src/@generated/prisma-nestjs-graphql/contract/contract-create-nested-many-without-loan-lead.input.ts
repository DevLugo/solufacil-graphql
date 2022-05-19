import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutLoanLeadInput } from './contract-create-without-loan-lead.input';
import { ContractCreateOrConnectWithoutLoanLeadInput } from './contract-create-or-connect-without-loan-lead.input';
import { ContractCreateManyLoanLeadInputEnvelope } from './contract-create-many-loan-lead-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractCreateNestedManyWithoutLoanLeadInput {

    @Field(() => [ContractCreateWithoutLoanLeadInput], {nullable:true})
    create?: Array<ContractCreateWithoutLoanLeadInput>;

    @Field(() => [ContractCreateOrConnectWithoutLoanLeadInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutLoanLeadInput>;

    @Field(() => ContractCreateManyLoanLeadInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyLoanLeadInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;
}
