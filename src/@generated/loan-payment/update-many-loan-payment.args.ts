import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentUpdateManyMutationInput } from './loan-payment-update-many-mutation.input';
import { LoanPaymentWhereInput } from './loan-payment-where.input';

@ArgsType()
export class UpdateManyLoanPaymentArgs {

    @Field(() => LoanPaymentUpdateManyMutationInput, {nullable:false})
    data!: LoanPaymentUpdateManyMutationInput;

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    where?: LoanPaymentWhereInput;
}
