import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractUpdateWithoutLoansInput } from './contract-update-without-loans.input';
import { ContractCreateWithoutLoansInput } from './contract-create-without-loans.input';

@InputType()
export class ContractUpsertWithoutLoansInput {

    @Field(() => ContractUpdateWithoutLoansInput, {nullable:false})
    update!: ContractUpdateWithoutLoansInput;

    @Field(() => ContractCreateWithoutLoansInput, {nullable:false})
    create!: ContractCreateWithoutLoansInput;
}
