import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereInput } from './employer-where.input';
import { EmployerOrderByWithAggregationInput } from './employer-order-by-with-aggregation.input';
import { EmployerScalarFieldEnum } from './employer-scalar-field.enum';
import { EmployerScalarWhereWithAggregatesInput } from './employer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmployerCountAggregateInput } from './employer-count-aggregate.input';
import { EmployerMinAggregateInput } from './employer-min-aggregate.input';
import { EmployerMaxAggregateInput } from './employer-max-aggregate.input';

@ArgsType()
export class EmployerGroupByArgs {

    @Field(() => EmployerWhereInput, {nullable:true})
    where?: EmployerWhereInput;

    @Field(() => [EmployerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployerOrderByWithAggregationInput>;

    @Field(() => [EmployerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployerScalarFieldEnum>;

    @Field(() => EmployerScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmployerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmployerCountAggregateInput, {nullable:true})
    _count?: EmployerCountAggregateInput;

    @Field(() => EmployerMinAggregateInput, {nullable:true})
    _min?: EmployerMinAggregateInput;

    @Field(() => EmployerMaxAggregateInput, {nullable:true})
    _max?: EmployerMaxAggregateInput;
}
