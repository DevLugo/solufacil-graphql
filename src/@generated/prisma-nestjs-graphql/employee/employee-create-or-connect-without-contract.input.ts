import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutContractInput } from './employee-create-without-contract.input';

@InputType()
export class EmployeeCreateOrConnectWithoutContractInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutContractInput, {nullable:false})
    create!: EmployeeCreateWithoutContractInput;
}
