import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutEmployerInput } from './contract-create-without-employer.input';

@InputType()
export class ContractCreateOrConnectWithoutEmployerInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutEmployerInput, {nullable:false})
    create!: ContractCreateWithoutEmployerInput;
}
