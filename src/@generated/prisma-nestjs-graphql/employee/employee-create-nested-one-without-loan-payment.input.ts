import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutLoanPaymentInput } from './employee-create-without-loan-payment.input';
import { EmployeeCreateOrConnectWithoutLoanPaymentInput } from './employee-create-or-connect-without-loan-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutLoanPaymentInput {

    @Field(() => EmployeeCreateWithoutLoanPaymentInput, {nullable:true})
    create?: EmployeeCreateWithoutLoanPaymentInput;

    @Field(() => EmployeeCreateOrConnectWithoutLoanPaymentInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanPaymentInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
