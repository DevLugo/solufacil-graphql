import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentCreateWithoutEmployeeInput } from './loan-payment-create-without-employee.input';

@InputType()
export class LoanPaymentCreateOrConnectWithoutEmployeeInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentCreateWithoutEmployeeInput, {nullable:false})
    create!: LoanPaymentCreateWithoutEmployeeInput;
}
