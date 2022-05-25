import { EmployeeCreateWithoutCommissionPaymentInput } from './employee-create-without-commission-payment.input';
import { EmployeeCreateOrConnectWithoutCommissionPaymentInput } from './employee-create-or-connect-without-commission-payment.input';
import { EmployeeUpsertWithoutCommissionPaymentInput } from './employee-upsert-without-commission-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutCommissionPaymentInput } from './employee-update-without-commission-payment.input';
export declare class EmployeeUpdateOneRequiredWithoutCommissionPaymentInput {
    create?: EmployeeCreateWithoutCommissionPaymentInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutCommissionPaymentInput;
    upsert?: EmployeeUpsertWithoutCommissionPaymentInput;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutCommissionPaymentInput;
}
