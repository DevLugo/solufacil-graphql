import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PhoneScalarWhereWithAggregatesInput {

    @Field(() => [PhoneScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PhoneScalarWhereWithAggregatesInput>;

    @Field(() => [PhoneScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PhoneScalarWhereWithAggregatesInput>;

    @Field(() => [PhoneScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PhoneScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    borrowerId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    avalId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    employeeId?: StringNullableWithAggregatesFilter;
}
