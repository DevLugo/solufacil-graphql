import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutLoanInput } from './employee-create-without-loan.input';
import { EmployeeCreateOrConnectWithoutLoanInput } from './employee-create-or-connect-without-loan.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutLoanInput {

    @Field(() => EmployeeCreateWithoutLoanInput, {nullable:true})
    create?: EmployeeCreateWithoutLoanInput;

    @Field(() => EmployeeCreateOrConnectWithoutLoanInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
