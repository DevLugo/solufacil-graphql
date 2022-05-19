import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LoantypeScalarWhereWithAggregatesInput {

    @Field(() => [LoantypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LoantypeScalarWhereWithAggregatesInput>;

    @Field(() => [LoantypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LoantypeScalarWhereWithAggregatesInput>;

    @Field(() => [LoantypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LoantypeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weekDuration?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rate?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    overdueRate?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
