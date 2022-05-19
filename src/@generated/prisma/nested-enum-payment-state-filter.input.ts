import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentState } from './payment-state.enum';

@InputType()
export class NestedEnumPaymentStateFilter {

    @Field(() => PaymentState, {nullable:true})
    equals?: keyof typeof PaymentState;

    @Field(() => [PaymentState], {nullable:true})
    in?: Array<keyof typeof PaymentState>;

    @Field(() => [PaymentState], {nullable:true})
    notIn?: Array<keyof typeof PaymentState>;

    @Field(() => NestedEnumPaymentStateFilter, {nullable:true})
    not?: NestedEnumPaymentStateFilter;
}
