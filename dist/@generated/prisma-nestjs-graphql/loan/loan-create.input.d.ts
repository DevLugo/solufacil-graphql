import { LoanState } from '../prisma/loan-state.enum';
import { LoanPaymentCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-create-nested-many-without-loan.input';
import { Decimal } from '@prisma/client/runtime';
import { LoantypeCreateNestedOneWithoutLoanInput } from '../loantype/loantype-create-nested-one-without-loan.input';
import { EmployeeCreateNestedOneWithoutLoanInput } from '../employee/employee-create-nested-one-without-loan.input';
import { ContractCreateNestedOneWithoutLoansInput } from '../contract/contract-create-nested-one-without-loans.input';
import { PaymentScheduleCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-create-nested-many-without-loan.input';
import { CommissionPaymentCreateNestedManyWithoutLoanInput } from '../commission-payment/commission-payment-create-nested-many-without-loan.input';
export declare class LoanCreateInput {
    id?: string;
    status: keyof typeof LoanState;
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput;
    weeklyPaymentAmount: Decimal;
    amountToPay?: Decimal;
    loanType: LoantypeCreateNestedOneWithoutLoanInput;
    signDate?: Date | string;
    createdAt?: Date | string;
    employee: EmployeeCreateNestedOneWithoutLoanInput;
    updatedAt?: Date | string;
    contract: ContractCreateNestedOneWithoutLoansInput;
    paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput;
    CommissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput;
}
