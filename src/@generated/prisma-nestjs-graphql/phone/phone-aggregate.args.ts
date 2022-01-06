import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneWhereInput } from './phone-where.input';
import { PhoneOrderByWithRelationInput } from './phone-order-by-with-relation.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PhoneCountAggregateInput } from './phone-count-aggregate.input';
import { PhoneMinAggregateInput } from './phone-min-aggregate.input';
import { PhoneMaxAggregateInput } from './phone-max-aggregate.input';

@ArgsType()
export class PhoneAggregateArgs {

    @Field(() => PhoneWhereInput, {nullable:true})
    where?: PhoneWhereInput;

    @Field(() => [PhoneOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PhoneOrderByWithRelationInput>;

    @Field(() => PhoneWhereUniqueInput, {nullable:true})
    cursor?: PhoneWhereUniqueInput;

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
