import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEmployeesTypesWithAggregatesFilter } from '../prisma/enum-employees-types-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeeScalarWhereWithAggregatesInput {

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumEmployeesTypesWithAggregatesFilter, {nullable:true})
    type?: EnumEmployeesTypesWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
