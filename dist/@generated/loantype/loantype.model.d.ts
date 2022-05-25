import { Loan } from '../loan/loan.model';
import { ComissionPaymentConfiguration } from '../comission-payment-configuration/comission-payment-configuration.model';
import { LoantypeCount } from './loantype-count.output';
export declare class Loantype {
    id: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt: Date;
    updatedAt: Date;
    Loan?: Array<Loan>;
    ComissionPaymentConfiguration?: Array<ComissionPaymentConfiguration>;
    _count?: LoantypeCount;
}
