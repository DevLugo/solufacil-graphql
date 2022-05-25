import { Decimal } from '@prisma/client/runtime';
export declare class PaymentScheduleSumAggregate {
    numeration?: number;
    amountToPay?: Decimal;
    paidAmount?: Decimal;
    returnToCapital?: Decimal;
    profit?: Decimal;
}
