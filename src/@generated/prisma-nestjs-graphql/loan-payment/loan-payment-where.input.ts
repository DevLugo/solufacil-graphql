import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { PaymentScheduleListRelationFilter } from '../payment-schedule/payment-schedule-list-relation-filter.input';
import { LoanRelationFilter } from '../loan/loan-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';

@InputType()
export class LoanPaymentWhereInput {

    @Field(() => [LoanPaymentWhereInput], {nullable:true})
    AND?: Array<LoanPaymentWhereInput>;

    @Field(() => [LoanPaymentWhereInput], {nullable:true})
    OR?: Array<LoanPaymentWhereInput>;

    @Field(() => [LoanPaymentWhereInput], {nullable:true})
    NOT?: Array<LoanPaymentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comments?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => PaymentScheduleListRelationFilter, {nullable:true})
    paymentSchedules?: PaymentScheduleListRelationFilter;

    @Field(() => LoanRelationFilter, {nullable:true})
    loan?: LoanRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    loanId?: StringFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;
}
