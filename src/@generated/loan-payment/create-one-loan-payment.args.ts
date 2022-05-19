import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentCreateInput } from './loan-payment-create.input';

@ArgsType()
export class CreateOneLoanPaymentArgs {

    @Field(() => LoanPaymentCreateInput, {nullable:false})
    data!: LoanPaymentCreateInput;
}
