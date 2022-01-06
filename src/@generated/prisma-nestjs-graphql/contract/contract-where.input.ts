import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Prisma } from '@prisma/client';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { LoanListRelationFilter } from '../loan/loan-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractWhereInput {

    @Field(() => [ContractWhereInput], {nullable:true})
    AND?: Array<ContractWhereInput>;

    @Field(() => [ContractWhereInput], {nullable:true})
    OR?: Array<ContractWhereInput>;

    @Field(() => [ContractWhereInput], {nullable:true})
    NOT?: Array<ContractWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => BorrowerRelationFilter, {nullable:true})
    Borrower?: BorrowerRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    borrowerId?: StringNullableFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    Employee?: EmployeeRelationFilter;

    @Field(() => DocumentListRelationFilter, {nullable:true})
    Documents?: DocumentListRelationFilter;

    @Field(() => LoanListRelationFilter, {nullable:true})
    Loans?: LoanListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    employeeId?: StringNullableFilter;
}
