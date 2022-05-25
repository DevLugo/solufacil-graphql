import { EmployeesTypes } from '../prisma/employees-types.enum';
import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { User } from '../user/user.model';
import { Loan } from '../loan/loan.model';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { CommissionPayment } from '../commission-payment/commission-payment.model';
import { Contract } from '../contract/contract.model';
import { Expenses } from '../expenses/expenses.model';
import { EmployeeCount } from './employee-count.output';
export declare class Employee {
    id: string;
    type: keyof typeof EmployeesTypes;
    phones?: Array<Phone>;
    documents?: Array<Document>;
    user?: User;
    createdAt: Date;
    updatedAt: Date;
    loan?: Array<Loan>;
    userId: string;
    loanPayment?: Array<LoanPayment>;
    commissionPayment?: Array<CommissionPayment>;
    contractEmployee?: Array<Contract>;
    contractLoanLead?: Array<Contract>;
    Expenses?: Array<Expenses>;
    _count?: EmployeeCount;
}
