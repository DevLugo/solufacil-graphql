import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutBorrowerInput } from './contract-create-without-borrower.input';
import { ContractCreateOrConnectWithoutBorrowerInput } from './contract-create-or-connect-without-borrower.input';
import { ContractCreateManyBorrowerInputEnvelope } from './contract-create-many-borrower-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractCreateNestedManyWithoutBorrowerInput {

    @Field(() => [ContractCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<ContractCreateWithoutBorrowerInput>;

    @Field(() => [ContractCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutBorrowerInput>;

    @Field(() => ContractCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyBorrowerInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;
}
