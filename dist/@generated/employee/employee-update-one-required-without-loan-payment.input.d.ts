import { EmployeeCreateWithoutLoanPaymentInput } from './employee-create-without-loan-payment.input';
import { EmployeeCreateOrConnectWithoutLoanPaymentInput } from './employee-create-or-connect-without-loan-payment.input';
import { EmployeeUpsertWithoutLoanPaymentInput } from './employee-upsert-without-loan-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutLoanPaymentInput } from './employee-update-without-loan-payment.input';
export declare class EmployeeUpdateOneRequiredWithoutLoanPaymentInput {
    create?: EmployeeCreateWithoutLoanPaymentInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanPaymentInput;
    upsert?: EmployeeUpsertWithoutLoanPaymentInput;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutLoanPaymentInput;
}
