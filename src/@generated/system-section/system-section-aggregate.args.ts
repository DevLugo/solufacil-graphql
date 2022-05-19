import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionWhereInput } from './system-section-where.input';
import { SystemSectionOrderByWithRelationInput } from './system-section-order-by-with-relation.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SystemSectionCountAggregateInput } from './system-section-count-aggregate.input';
import { SystemSectionMinAggregateInput } from './system-section-min-aggregate.input';
import { SystemSectionMaxAggregateInput } from './system-section-max-aggregate.input';

@ArgsType()
export class SystemSectionAggregateArgs {

    @Field(() => SystemSectionWhereInput, {nullable:true})
    where?: SystemSectionWhereInput;

    @Field(() => [SystemSectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SystemSectionOrderByWithRelationInput>;

    @Field(() => SystemSectionWhereUniqueInput, {nullable:true})
    cursor?: SystemSectionWhereUniqueInput;

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
