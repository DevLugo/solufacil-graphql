import { Decimal } from '@prisma/client/runtime';
export declare class LoanPaymentCreateManyLoanInput {
    id?: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employeeId: string;
}
