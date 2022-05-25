import { LoanState } from '../prisma/loan-state.enum';
import { Decimal } from '@prisma/client/runtime';
export declare class LoanMaxAggregate {
    id?: string;
    status?: keyof typeof LoanState;
    weeklyPaymentAmount?: Decimal;
    amountToPay?: Decimal;
    signDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contractId?: string;
    loantypeId?: string;
    employeeId?: string;
}
