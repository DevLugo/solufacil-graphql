import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { LoantypeOrderByWithRelationInput } from '../loantype/loantype-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { ContractOrderByWithRelationInput } from '../contract/contract-order-by-with-relation.input';
import { PaymentScheduleOrderByRelationAggregateInput } from '../payment-schedule/payment-schedule-order-by-relation-aggregate.input';

@InputType()
export class LoanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @HideField()
    payments?: LoanPaymentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    weeklyPaymentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;

    @Field(() => LoantypeOrderByWithRelationInput, {nullable:true})
    loanType?: LoantypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    signDate?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    employee?: EmployeeOrderByWithRelationInput;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContractOrderByWithRelationInput, {nullable:true})
    contract?: ContractOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loantypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => PaymentScheduleOrderByRelationAggregateInput, {nullable:true})
    paymentSchedule?: PaymentScheduleOrderByRelationAggregateInput;
}
