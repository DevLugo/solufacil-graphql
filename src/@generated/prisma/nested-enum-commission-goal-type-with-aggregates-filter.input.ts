import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionGoalType } from './commission-goal-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionGoalTypeFilter } from './nested-enum-commission-goal-type-filter.input';

@InputType()
export class NestedEnumCommissionGoalTypeWithAggregatesFilter {

    @Field(() => CommissionGoalType, {nullable:true})
    equals?: keyof typeof CommissionGoalType;

    @Field(() => [CommissionGoalType], {nullable:true})
    in?: Array<keyof typeof CommissionGoalType>;

    @Field(() => [CommissionGoalType], {nullable:true})
    notIn?: Array<keyof typeof CommissionGoalType>;

    @Field(() => NestedEnumCommissionGoalTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCommissionGoalTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCommissionGoalTypeFilter, {nullable:true})
    _min?: NestedEnumCommissionGoalTypeFilter;

    @Field(() => NestedEnumCommissionGoalTypeFilter, {nullable:true})
    _max?: NestedEnumCommissionGoalTypeFilter;
}
