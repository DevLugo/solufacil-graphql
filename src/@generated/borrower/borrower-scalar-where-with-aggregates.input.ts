import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BorrowerScalarWhereWithAggregatesInput {

    @Field(() => [BorrowerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BorrowerScalarWhereWithAggregatesInput>;

    @Field(() => [BorrowerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BorrowerScalarWhereWithAggregatesInput>;

    @Field(() => [BorrowerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BorrowerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: StringNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
