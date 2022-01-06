import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionWhereInput } from './system-section-where.input';
import { SystemSectionOrderByWithAggregationInput } from './system-section-order-by-with-aggregation.input';
import { SystemSectionScalarFieldEnum } from './system-section-scalar-field.enum';
import { SystemSectionScalarWhereWithAggregatesInput } from './system-section-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SystemSectionCountAggregateInput } from './system-section-count-aggregate.input';
import { SystemSectionMinAggregateInput } from './system-section-min-aggregate.input';
import { SystemSectionMaxAggregateInput } from './system-section-max-aggregate.input';

@ArgsType()
export class SystemSectionGroupByArgs {

    @Field(() => SystemSectionWhereInput, {nullable:true})
    where?: SystemSectionWhereInput;

    @Field(() => [SystemSectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SystemSectionOrderByWithAggregationInput>;

    @Field(() => [SystemSectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SystemSectionScalarFieldEnum>;

    @Field(() => SystemSectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: SystemSectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SystemSectionCountAggregateInput, {nullable:true})
    _count?: SystemSectionCountAggregateInput;

    @Field(() => SystemSectionMinAggregateInput, {nullable:true})
    _min?: SystemSectionMinAggregateInput;

    @Field(() => SystemSectionMaxAggregateInput, {nullable:true})
    _max?: SystemSectionMaxAggregateInput;
}
