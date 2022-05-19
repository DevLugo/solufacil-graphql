import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentState } from './payment-state.enum';
import { NestedEnumPaymentStateWithAggregatesFilter } from './nested-enum-payment-state-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentStateFilter } from './nested-enum-payment-state-filter.input';

@InputType()
export class EnumPaymentStateWithAggregatesFilter {

    @Field(() => PaymentState, {nullable:true})
    equals?: keyof typeof PaymentState;

    @Field(() => [PaymentState], {nullable:true})
    in?: Array<keyof typeof PaymentState>;

    @Field(() => [PaymentState], {nullable:true})
    notIn?: Array<keyof typeof PaymentState>;

    @Field(() => NestedEnumPaymentStateWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPaymentStateWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPaymentStateFilter, {nullable:true})
    _min?: NestedEnumPaymentStateFilter;

    @Field(() => NestedEnumPaymentStateFilter, {nullable:true})
    _max?: NestedEnumPaymentStateFilter;
}
