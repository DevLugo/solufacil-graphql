import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutEmployeeInput } from './contract-update-without-employee.input';
import { ContractCreateWithoutEmployeeInput } from './contract-create-without-employee.input';

@InputType()
export class ContractUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutEmployeeInput, {nullable:false})
    update!: ContractUpdateWithoutEmployeeInput;

    @Field(() => ContractCreateWithoutEmployeeInput, {nullable:false})
    create!: ContractCreateWithoutEmployeeInput;
}
