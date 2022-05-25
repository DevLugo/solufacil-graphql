import { NullableStringFieldUpdateOperationsInput } from "../../../../@generated/prisma/nullable-string-field-update-operations.input";
export declare class LoanPaymentUpdateInput {
    amount: any;
    paidDate: Date | string;
    details?: NullableStringFieldUpdateOperationsInput;
    employeeId: string;
    loanId: string;
}
