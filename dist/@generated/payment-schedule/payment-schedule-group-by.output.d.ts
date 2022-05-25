import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { PaymentScheduleCountAggregate } from './payment-schedule-count-aggregate.output';
import { PaymentScheduleAvgAggregate } from './payment-schedule-avg-aggregate.output';
import { PaymentScheduleSumAggregate } from './payment-schedule-sum-aggregate.output';
import { PaymentScheduleMinAggregate } from './payment-schedule-min-aggregate.output';
import { PaymentScheduleMaxAggregate } from './payment-schedule-max-aggregate.output';
export declare class PaymentScheduleGroupBy {
    id: string;
    numeration: number;
    amountToPay: Decimal;
    paidAmount: Decimal;
    returnToCapital: Decimal;
    profit: Decimal;
    status: keyof typeof PaymentState;
    delayed: boolean;
    dueDate: Date | string;
    details?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    loanId: string;
    _count?: PaymentScheduleCountAggregate;
    _avg?: PaymentScheduleAvgAggregate;
    _sum?: PaymentScheduleSumAggregate;
    _min?: PaymentScheduleMinAggregate;
    _max?: PaymentScheduleMaxAggregate;
}
