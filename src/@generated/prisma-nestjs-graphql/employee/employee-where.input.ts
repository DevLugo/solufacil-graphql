import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { PhoneListRelationFilter } from '../phone/phone-list-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { ContractListRelationFilter } from '../contract/contract-list-relation-filter.input';
import { LoanListRelationFilter } from '../loan/loan-list-relation-filter.input';
import { LoanPaymentListRelationFilter } from '../loan-payment/loan-payment-list-relation-filter.input';

@InputType()
export class EmployeeWhereInput {

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumEmployeesTypesFilter, {nullable:true})
    type?: EnumEmployeesTypesFilter;

    @Field(() => PhoneListRelationFilter, {nullable:true})
    phones?: PhoneListRelationFilter;

    @Field(() => DocumentListRelationFilter, {nullable:true})
    documents?: DocumentListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => ContractListRelationFilter, {nullable:true})
    contracts?: ContractListRelationFilter;

    @Field(() => LoanListRelationFilter, {nullable:true})
    loan?: LoanListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => LoanPaymentListRelationFilter, {nullable:true})
    loanPayment?: LoanPaymentListRelationFilter;
}
