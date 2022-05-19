import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentCreateManyInput } from './loan-payment-create-many.input';

@ArgsType()
export class CreateManyLoanPaymentArgs {

    @Field(() => [LoanPaymentCreateManyInput], {nullable:false})
    data!: Array<LoanPaymentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
