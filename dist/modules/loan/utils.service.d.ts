export declare class PaymentBreakDown {
    amount: Number;
    profit: Number;
    returnOfCapital: Number;
}
export declare class UtilsService {
    constructor();
    paymentBreakDown(amount: Number, rate: number): PaymentBreakDown;
}
