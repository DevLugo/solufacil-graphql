import { LoanState } from '../prisma/loan-state.enum';
import { Decimal } from '@prisma/client/runtime';
import { LoanCountAggregate } from './loan-count-aggregate.output';
import { LoanAvgAggregate } from './loan-avg-aggregate.output';
import { LoanSumAggregate } from './loan-sum-aggregate.output';
import { LoanMinAggregate } from './loan-min-aggregate.output';
import { LoanMaxAggregate } from './loan-max-aggregate.output';
export declare class LoanGroupBy {
    id: string;
    status: keyof typeof LoanState;
    weeklyPaymentAmount: Decimal;
    amountToPay: Decimal;
    signDate: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
    contractId: string;
    loantypeId: string;
    employeeId: string;
    _count?: LoanCountAggregate;
    _avg?: LoanAvgAggregate;
    _sum?: LoanSumAggregate;
    _min?: LoanMinAggregate;
    _max?: LoanMaxAggregate;
}
