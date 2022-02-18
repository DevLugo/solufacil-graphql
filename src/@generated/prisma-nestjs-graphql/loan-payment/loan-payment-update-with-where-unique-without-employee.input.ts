import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutEmployeeInput } from './loan-payment-update-without-employee.input';

@InputType()
export class LoanPaymentUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutEmployeeInput, {nullable:false})
    data!: LoanPaymentUpdateWithoutEmployeeInput;
}
