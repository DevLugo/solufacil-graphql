import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionType } from './commission-type.enum';
import { NestedEnumCommissionTypeFilter } from './nested-enum-commission-type-filter.input';

@InputType()
export class EnumCommissionTypeFilter {

    @Field(() => CommissionType, {nullable:true})
    equals?: keyof typeof CommissionType;

    @Field(() => [CommissionType], {nullable:true})
    in?: Array<keyof typeof CommissionType>;

    @Field(() => [CommissionType], {nullable:true})
    notIn?: Array<keyof typeof CommissionType>;

    @Field(() => NestedEnumCommissionTypeFilter, {nullable:true})
    not?: NestedEnumCommissionTypeFilter;
}
