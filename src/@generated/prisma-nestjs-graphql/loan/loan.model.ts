import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Loantype } from '../loantype/loantype.model';
import { Employee } from '../employee/employee.model';
import { Contract } from '../contract/contract.model';
import { PaymentSchedule } from '../payment-schedule/payment-schedule.model';
import { LoanCount } from './loan-count.output';

@ObjectType()
export class Loan {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LoanState, {nullable:false})
    status!: keyof typeof LoanState;

    @Field(() => [LoanPayment], {nullable:true})
    payments?: Array<LoanPayment>;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: any;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    amountToPay!: any;

    @Field(() => Loantype, {nullable:false})
    loanType?: Loantype;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Contract, {nullable:false})
    contract?: Contract;

    @Field(() => String, {nullable:false})
    contractId!: string;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => [PaymentSchedule], {nullable:true})
    paymentSchedule?: Array<PaymentSchedule>;

    @Field(() => LoanCount, {nullable:false})
    _count?: LoanCount;
}
