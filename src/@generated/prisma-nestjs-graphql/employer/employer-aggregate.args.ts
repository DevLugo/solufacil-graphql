import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereInput } from './employer-where.input';
import { EmployerOrderByWithRelationInput } from './employer-order-by-with-relation.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployerCountAggregateInput } from './employer-count-aggregate.input';
import { EmployerMinAggregateInput } from './employer-min-aggregate.input';
import { EmployerMaxAggregateInput } from './employer-max-aggregate.input';

@ArgsType()
export class EmployerAggregateArgs {

    @Field(() => EmployerWhereInput, {nullable:true})
    where?: EmployerWhereInput;

    @Field(() => [EmployerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployerOrderByWithRelationInput>;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    cursor?: EmployerWhereUniqueInput;

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
