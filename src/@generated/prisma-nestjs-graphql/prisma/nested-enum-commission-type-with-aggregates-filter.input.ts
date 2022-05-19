import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionType } from './commission-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionTypeFilter } from './nested-enum-commission-type-filter.input';

@InputType()
export class NestedEnumCommissionTypeWithAggregatesFilter {

    @Field(() => CommissionType, {nullable:true})
    equals?: keyof typeof CommissionType;

    @Field(() => [CommissionType], {nullable:true})
    in?: Array<keyof typeof CommissionType>;

    @Field(() => [CommissionType], {nullable:true})
    notIn?: Array<keyof typeof CommissionType>;

    @Field(() => NestedEnumCommissionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCommissionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCommissionTypeFilter, {nullable:true})
    _min?: NestedEnumCommissionTypeFilter;

    @Field(() => NestedEnumCommissionTypeFilter, {nullable:true})
    _max?: NestedEnumCommissionTypeFilter;
}
