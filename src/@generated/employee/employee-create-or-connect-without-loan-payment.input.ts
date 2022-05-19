import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutLoanPaymentInput } from './employee-create-without-loan-payment.input';

@InputType()
export class EmployeeCreateOrConnectWithoutLoanPaymentInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutLoanPaymentInput, {nullable:false})
    create!: EmployeeCreateWithoutLoanPaymentInput;
}
