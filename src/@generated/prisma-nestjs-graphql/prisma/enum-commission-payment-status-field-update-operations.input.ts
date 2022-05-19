import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentStatus } from './commission-payment-status.enum';

@InputType()
export class EnumCommissionPaymentStatusFieldUpdateOperationsInput {

    @Field(() => CommissionPaymentStatus, {nullable:true})
    set?: keyof typeof CommissionPaymentStatus;
}
