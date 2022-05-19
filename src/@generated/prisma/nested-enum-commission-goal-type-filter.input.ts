import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionGoalType } from './commission-goal-type.enum';

@InputType()
export class NestedEnumCommissionGoalTypeFilter {

    @Field(() => CommissionGoalType, {nullable:true})
    equals?: keyof typeof CommissionGoalType;

    @Field(() => [CommissionGoalType], {nullable:true})
    in?: Array<keyof typeof CommissionGoalType>;

    @Field(() => [CommissionGoalType], {nullable:true})
    notIn?: Array<keyof typeof CommissionGoalType>;

    @Field(() => NestedEnumCommissionGoalTypeFilter, {nullable:true})
    not?: NestedEnumCommissionGoalTypeFilter;
}
