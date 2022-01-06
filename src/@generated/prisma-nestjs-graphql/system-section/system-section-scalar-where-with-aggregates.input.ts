import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SystemSectionScalarWhereWithAggregatesInput {

    @Field(() => [SystemSectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SystemSectionScalarWhereWithAggregatesInput>;

    @Field(() => [SystemSectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SystemSectionScalarWhereWithAggregatesInput>;

    @Field(() => [SystemSectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SystemSectionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
