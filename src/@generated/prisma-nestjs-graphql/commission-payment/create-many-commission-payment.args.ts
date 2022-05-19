import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentCreateManyInput } from './commission-payment-create-many.input';

@ArgsType()
export class CreateManyCommissionPaymentArgs {

    @Field(() => [CommissionPaymentCreateManyInput], {nullable:false})
    data!: Array<CommissionPaymentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
