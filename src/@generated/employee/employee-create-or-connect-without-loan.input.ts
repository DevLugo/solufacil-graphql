import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutLoanInput } from './employee-create-without-loan.input';

@InputType()
export class EmployeeCreateOrConnectWithoutLoanInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutLoanInput, {nullable:false})
    create!: EmployeeCreateWithoutLoanInput;
}
