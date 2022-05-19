import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { LoanListRelationFilter } from '../loan/loan-list-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContractTypeRelationFilter } from '../contract-type/contract-type-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';

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

    @Field(() => BorrowerRelationFilter, {nullable:true})
    borrower?: BorrowerRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    borrowerId?: StringFilter;

    @Field(() => DocumentListRelationFilter, {nullable:true})
    documents?: DocumentListRelationFilter;

    @HideField()
    loans?: LoanListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    signDate?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => ContractTypeRelationFilter, {nullable:true})
    contractType?: ContractTypeRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    contractTypeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    loanLeadId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    loanLead?: EmployeeRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;
}
