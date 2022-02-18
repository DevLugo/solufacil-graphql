import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutContractsInput } from './employee-create-without-contracts.input';

@InputType()
export class EmployeeCreateOrConnectWithoutContractsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutContractsInput, {nullable:false})
    create!: EmployeeCreateWithoutContractsInput;
}
