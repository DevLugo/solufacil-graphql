import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';
import { LogOrderByWithAggregationInput } from './log-order-by-with-aggregation.input';
import { LogScalarFieldEnum } from './log-scalar-field.enum';
import { LogScalarWhereWithAggregatesInput } from './log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LogCountAggregateInput } from './log-count-aggregate.input';
import { LogMinAggregateInput } from './log-min-aggregate.input';
import { LogMaxAggregateInput } from './log-max-aggregate.input';

@ArgsType()
export class LogGroupByArgs {

    @Field(() => LogWhereInput, {nullable:true})
    where?: LogWhereInput;

    @Field(() => [LogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LogOrderByWithAggregationInput>;

    @Field(() => [LogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LogScalarFieldEnum>;

    @Field(() => LogScalarWhereWithAggregatesInput, {nullable:true})
    having?: LogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LogCountAggregateInput, {nullable:true})
    _count?: LogCountAggregateInput;

    @Field(() => LogMinAggregateInput, {nullable:true})
    _min?: LogMinAggregateInput;

    @Field(() => LogMaxAggregateInput, {nullable:true})
    _max?: LogMaxAggregateInput;
}
