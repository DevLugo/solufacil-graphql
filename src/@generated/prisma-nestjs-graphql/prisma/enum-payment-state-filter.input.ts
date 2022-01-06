import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentState } from './payment-state.enum';
import { NestedEnumPaymentStateFilter } from './nested-enum-payment-state-filter.input';

@InputType()
export class EnumPaymentStateFilter {

    @Field(() => PaymentState, {nullable:true})
    equals?: keyof typeof PaymentState;

    @Field(() => [PaymentState], {nullable:true})
    in?: Array<keyof typeof PaymentState>;

    @Field(() => [PaymentState], {nullable:true})
    notIn?: Array<keyof typeof PaymentState>;

    @Field(() => NestedEnumPaymentStateFilter, {nullable:true})
    not?: NestedEnumPaymentStateFilter;
}
