import { Decimal } from '@prisma/client/runtime';
import { LoanPaymentCountAggregate } from './loan-payment-count-aggregate.output';
import { LoanPaymentAvgAggregate } from './loan-payment-avg-aggregate.output';
import { LoanPaymentSumAggregate } from './loan-payment-sum-aggregate.output';
import { LoanPaymentMinAggregate } from './loan-payment-min-aggregate.output';
import { LoanPaymentMaxAggregate } from './loan-payment-max-aggregate.output';
export declare class LoanPaymentGroupBy {
    id: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    loanId: string;
    employeeId: string;
    _count?: LoanPaymentCountAggregate;
    _avg?: LoanPaymentAvgAggregate;
    _sum?: LoanPaymentSumAggregate;
    _min?: LoanPaymentMinAggregate;
    _max?: LoanPaymentMaxAggregate;
}
