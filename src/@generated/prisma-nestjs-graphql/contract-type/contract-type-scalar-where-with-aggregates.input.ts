import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ContractTypeScalarWhereWithAggregatesInput {

    @Field(() => [ContractTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContractTypeScalarWhereWithAggregatesInput>;

    @Field(() => [ContractTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContractTypeScalarWhereWithAggregatesInput>;

    @Field(() => [ContractTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContractTypeScalarWhereWithAggregatesInput>;

    @HideField()
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weekDuration?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rate?: FloatWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
