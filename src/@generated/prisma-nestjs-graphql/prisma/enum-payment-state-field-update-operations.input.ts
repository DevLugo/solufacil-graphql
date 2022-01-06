import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentState } from './payment-state.enum';

@InputType()
export class EnumPaymentStateFieldUpdateOperationsInput {

    @Field(() => PaymentState, {nullable:true})
    set?: keyof typeof PaymentState;
}
