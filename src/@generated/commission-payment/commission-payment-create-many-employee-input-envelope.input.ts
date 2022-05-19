import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateManyEmployeeInput } from './commission-payment-create-many-employee.input';

@InputType()
export class CommissionPaymentCreateManyEmployeeInputEnvelope {

    @Field(() => [CommissionPaymentCreateManyEmployeeInput], {nullable:false})
    data!: Array<CommissionPaymentCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
