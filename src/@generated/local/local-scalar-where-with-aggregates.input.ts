import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LocalScalarWhereWithAggregatesInput {

    @Field(() => [LocalScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocalScalarWhereWithAggregatesInput>;

    @Field(() => [LocalScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocalScalarWhereWithAggregatesInput>;

    @Field(() => [LocalScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocalScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    borrowerId?: StringWithAggregatesFilter;
}
