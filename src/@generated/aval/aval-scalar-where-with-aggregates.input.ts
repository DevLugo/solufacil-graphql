import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AvalScalarWhereWithAggregatesInput {

    @Field(() => [AvalScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AvalScalarWhereWithAggregatesInput>;

    @Field(() => [AvalScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AvalScalarWhereWithAggregatesInput>;

    @Field(() => [AvalScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AvalScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @HideField()
    fullName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
