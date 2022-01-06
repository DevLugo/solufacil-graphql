import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateManyLoanInput } from './loan-payment-create-many-loan.input';

@InputType()
export class LoanPaymentCreateManyLoanInputEnvelope {

    @Field(() => [LoanPaymentCreateManyLoanInput], {nullable:false})
    data!: Array<LoanPaymentCreateManyLoanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
