import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutEmployeeInput } from './contract-update-without-employee.input';

@InputType()
export class ContractUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutEmployeeInput, {nullable:false})
    data!: ContractUpdateWithoutEmployeeInput;
}
