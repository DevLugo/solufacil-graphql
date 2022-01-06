import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutLoansInput } from './contract-create-without-loans.input';
import { ContractCreateOrConnectWithoutLoansInput } from './contract-create-or-connect-without-loans.input';
import { ContractUpsertWithoutLoansInput } from './contract-upsert-without-loans.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutLoansInput } from './contract-update-without-loans.input';

@InputType()
export class ContractUpdateOneWithoutLoansInput {

    @Field(() => ContractCreateWithoutLoansInput, {nullable:true})
    create?: ContractCreateWithoutLoansInput;

    @Field(() => ContractCreateOrConnectWithoutLoansInput, {nullable:true})
    connectOrCreate?: ContractCreateOrConnectWithoutLoansInput;

    @Field(() => ContractUpsertWithoutLoansInput, {nullable:true})
    upsert?: ContractUpsertWithoutLoansInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ContractWhereUniqueInput, {nullable:true})
    connect?: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutLoansInput, {nullable:true})
    update?: ContractUpdateWithoutLoansInput;
}
