import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneWhereInput } from './phone-where.input';
import { PhoneOrderByWithAggregationInput } from './phone-order-by-with-aggregation.input';
import { PhoneScalarFieldEnum } from './phone-scalar-field.enum';
import { PhoneScalarWhereWithAggregatesInput } from './phone-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PhoneCountAggregateInput } from './phone-count-aggregate.input';
import { PhoneMinAggregateInput } from './phone-min-aggregate.input';
import { PhoneMaxAggregateInput } from './phone-max-aggregate.input';

@ArgsType()
export class PhoneGroupByArgs {

    @Field(() => PhoneWhereInput, {nullable:true})
    where?: PhoneWhereInput;

    @Field(() => [PhoneOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PhoneOrderByWithAggregationInput>;

    @Field(() => [PhoneScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PhoneScalarFieldEnum>;

    @Field(() => PhoneScalarWhereWithAggregatesInput, {nullable:true})
    having?: PhoneScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PhoneCountAggregateInput, {nullable:true})
    _count?: PhoneCountAggregateInput;

    @Field(() => PhoneMinAggregateInput, {nullable:true})
    _min?: PhoneMinAggregateInput;

    @Field(() => PhoneMaxAggregateInput, {nullable:true})
    _max?: PhoneMaxAggregateInput;
}
