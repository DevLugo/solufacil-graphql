import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutBorrowerInput } from './contract-update-without-borrower.input';
import { ContractCreateWithoutBorrowerInput } from './contract-create-without-borrower.input';

@InputType()
export class ContractUpsertWithWhereUniqueWithoutBorrowerInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutBorrowerInput, {nullable:false})
    update!: ContractUpdateWithoutBorrowerInput;

    @Field(() => ContractCreateWithoutBorrowerInput, {nullable:false})
    create!: ContractCreateWithoutBorrowerInput;
}
