import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { PaymentScheduleRelationFilter } from '../payment-schedule/payment-schedule-relation-filter.input';
import { LoanRelationFilter } from '../loan/loan-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCommissionPaymentStatusFilter } from '../prisma/enum-commission-payment-status-filter.input';

@InputType()
export class CommissionPaymentWhereInput {

    @Field(() => [CommissionPaymentWhereInput], {nullable:true})
    AND?: Array<CommissionPaymentWhereInput>;

    @Field(() => [CommissionPaymentWhereInput], {nullable:true})
    OR?: Array<CommissionPaymentWhereInput>;

    @Field(() => [CommissionPaymentWhereInput], {nullable:true})
    NOT?: Array<CommissionPaymentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @Field(() => PaymentScheduleRelationFilter, {nullable:true})
    paymentSchedule?: PaymentScheduleRelationFilter;

    @Field(() => LoanRelationFilter, {nullable:true})
    loan?: LoanRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    loanId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentScheduleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;

    @Field(() => EnumCommissionPaymentStatusFilter, {nullable:true})
    status?: EnumCommissionPaymentStatusFilter;
}
