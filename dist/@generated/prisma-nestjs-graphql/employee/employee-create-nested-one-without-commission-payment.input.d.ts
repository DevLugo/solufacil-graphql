import { EmployeeCreateWithoutCommissionPaymentInput } from './employee-create-without-commission-payment.input';
import { EmployeeCreateOrConnectWithoutCommissionPaymentInput } from './employee-create-or-connect-without-commission-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutCommissionPaymentInput {
    create?: EmployeeCreateWithoutCommissionPaymentInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutCommissionPaymentInput;
    connect?: EmployeeWhereUniqueInput;
}
