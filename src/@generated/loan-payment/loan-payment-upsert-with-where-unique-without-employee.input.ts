import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutEmployeeInput } from './loan-payment-update-without-employee.input';
import { LoanPaymentCreateWithoutEmployeeInput } from './loan-payment-create-without-employee.input';

@InputType()
export class LoanPaymentUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutEmployeeInput, {nullable:false})
    update!: LoanPaymentUpdateWithoutEmployeeInput;

    @Field(() => LoanPaymentCreateWithoutEmployeeInput, {nullable:false})
    create!: LoanPaymentCreateWithoutEmployeeInput;
}
