import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutLoansInput } from './contract-create-without-loans.input';
import { ContractCreateOrConnectWithoutLoansInput } from './contract-create-or-connect-without-loans.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractCreateNestedOneWithoutLoansInput {

    @Field(() => ContractCreateWithoutLoansInput, {nullable:true})
    create?: ContractCreateWithoutLoansInput;

    @Field(() => ContractCreateOrConnectWithoutLoansInput, {nullable:true})
    connectOrCreate?: ContractCreateOrConnectWithoutLoansInput;

    @Field(() => ContractWhereUniqueInput, {nullable:true})
    connect?: ContractWhereUniqueInput;
}
