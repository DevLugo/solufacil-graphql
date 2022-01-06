import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutBorrowerInput } from './contract-create-without-borrower.input';

@InputType()
export class ContractCreateOrConnectWithoutBorrowerInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutBorrowerInput, {nullable:false})
    create!: ContractCreateWithoutBorrowerInput;
}
