import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AvalRelationFilter } from '../aval/aval-relation-filter.input';

@InputType()
export class PhoneWhereInput {

    @Field(() => [PhoneWhereInput], {nullable:true})
    AND?: Array<PhoneWhereInput>;

    @Field(() => [PhoneWhereInput], {nullable:true})
    OR?: Array<PhoneWhereInput>;

    @Field(() => [PhoneWhereInput], {nullable:true})
    NOT?: Array<PhoneWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => BorrowerRelationFilter, {nullable:true})
    Borrower?: BorrowerRelationFilter;

    @HideField()
    borrowerId?: StringNullableFilter;

    @HideField()
    Employee?: EmployeeRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => AvalRelationFilter, {nullable:true})
    aval?: AvalRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avalId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    employeeId?: StringNullableFilter;
}
