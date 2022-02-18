import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeeScalarWhereInput {

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumEmployeesTypesFilter, {nullable:true})
    type?: EnumEmployeesTypesFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
