import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateManyLoanInput } from './commission-payment-create-many-loan.input';

@InputType()
export class CommissionPaymentCreateManyLoanInputEnvelope {

    @Field(() => [CommissionPaymentCreateManyLoanInput], {nullable:false})
    data!: Array<CommissionPaymentCreateManyLoanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
