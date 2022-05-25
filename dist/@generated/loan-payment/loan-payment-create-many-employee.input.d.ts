import { Decimal } from '@prisma/client/runtime';
export declare class LoanPaymentCreateManyEmployeeInput {
    id?: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loanId: string;
}
