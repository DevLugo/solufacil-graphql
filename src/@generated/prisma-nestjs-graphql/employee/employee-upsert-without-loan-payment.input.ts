import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutLoanPaymentInput } from './employee-update-without-loan-payment.input';
import { EmployeeCreateWithoutLoanPaymentInput } from './employee-create-without-loan-payment.input';

@InputType()
export class EmployeeUpsertWithoutLoanPaymentInput {

    @Field(() => EmployeeUpdateWithoutLoanPaymentInput, {nullable:false})
    update!: EmployeeUpdateWithoutLoanPaymentInput;

    @Field(() => EmployeeCreateWithoutLoanPaymentInput, {nullable:false})
    create!: EmployeeCreateWithoutLoanPaymentInput;
}
