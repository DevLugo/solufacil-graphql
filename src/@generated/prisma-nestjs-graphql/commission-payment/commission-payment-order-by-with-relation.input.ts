import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentScheduleOrderByWithRelationInput } from '../payment-schedule/payment-schedule-order-by-with-relation.input';
import { LoanOrderByWithRelationInput } from '../loan/loan-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';

@InputType()
export class CommissionPaymentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => PaymentScheduleOrderByWithRelationInput, {nullable:true})
    paymentSchedule?: PaymentScheduleOrderByWithRelationInput;

    @Field(() => LoanOrderByWithRelationInput, {nullable:true})
    loan?: LoanOrderByWithRelationInput;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    employee?: EmployeeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    loanId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentScheduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}
