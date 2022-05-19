import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionType } from './commission-type.enum';

@InputType()
export class NestedEnumCommissionTypeFilter {

    @Field(() => CommissionType, {nullable:true})
    equals?: keyof typeof CommissionType;

    @Field(() => [CommissionType], {nullable:true})
    in?: Array<keyof typeof CommissionType>;

    @Field(() => [CommissionType], {nullable:true})
    notIn?: Array<keyof typeof CommissionType>;

    @Field(() => NestedEnumCommissionTypeFilter, {nullable:true})
    not?: NestedEnumCommissionTypeFilter;
}
