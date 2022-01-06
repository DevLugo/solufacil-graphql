import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEmployeesTypesWithAggregatesFilter } from '../prisma/enum-employees-types-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EmployerScalarWhereWithAggregatesInput {

    @Field(() => [EmployerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployerScalarWhereWithAggregatesInput>;

    @Field(() => [EmployerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployerScalarWhereWithAggregatesInput>;

    @Field(() => [EmployerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumEmployeesTypesWithAggregatesFilter, {nullable:true})
    type?: EnumEmployeesTypesWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fullName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
