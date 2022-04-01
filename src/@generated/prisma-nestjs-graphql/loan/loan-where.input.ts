import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLoanStateFilter } from '../prisma/enum-loan-state-filter.input';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentListRelationFilter } from '../loan-payment/loan-payment-list-relation-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { LoantypeRelationFilter } from '../loantype/loantype-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { ContractRelationFilter } from '../contract/contract-relation-filter.input';
import { PaymentScheduleListRelationFilter } from '../payment-schedule/payment-schedule-list-relation-filter.input';

@InputType()
export class LoanWhereInput {

    @Field(() => [LoanWhereInput], {nullable:true})
    AND?: Array<LoanWhereInput>;

    @Field(() => [LoanWhereInput], {nullable:true})
    OR?: Array<LoanWhereInput>;

    @Field(() => [LoanWhereInput], {nullable:true})
    NOT?: Array<LoanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    status?: EnumLoanStateFilter;

    @HideField()
    payments?: LoanPaymentListRelationFilter;

    @Field(() => DecimalFilter, {nullable:true})
    weeklyPaymentAmount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amountToPay?: DecimalFilter;

    @Field(() => LoantypeRelationFilter, {nullable:true})
    loanType?: LoantypeRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    signDate?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => ContractRelationFilter, {nullable:true})
    contract?: ContractRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    contractId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    loantypeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;

    @Field(() => PaymentScheduleListRelationFilter, {nullable:true})
    paymentSchedule?: PaymentScheduleListRelationFilter;
}
