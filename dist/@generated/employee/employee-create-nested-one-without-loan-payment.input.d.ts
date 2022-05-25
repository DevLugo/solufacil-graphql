import { EmployeeCreateWithoutLoanPaymentInput } from './employee-create-without-loan-payment.input';
import { EmployeeCreateOrConnectWithoutLoanPaymentInput } from './employee-create-or-connect-without-loan-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutLoanPaymentInput {
    create?: EmployeeCreateWithoutLoanPaymentInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanPaymentInput;
    connect?: EmployeeWhereUniqueInput;
}
