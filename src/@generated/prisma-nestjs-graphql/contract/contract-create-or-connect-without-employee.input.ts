import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutEmployeeInput } from './contract-create-without-employee.input';

@InputType()
export class ContractCreateOrConnectWithoutEmployeeInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutEmployeeInput, {nullable:false})
    create!: ContractCreateWithoutEmployeeInput;
}
