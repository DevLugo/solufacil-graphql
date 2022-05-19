import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentCreateInput } from './loan-payment-create.input';
import { LoanPaymentUpdateInput } from './loan-payment-update.input';

@ArgsType()
export class UpsertOneLoanPaymentArgs {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentCreateInput, {nullable:false})
    create!: LoanPaymentCreateInput;

    @Field(() => LoanPaymentUpdateInput, {nullable:false})
    update!: LoanPaymentUpdateInput;
}
