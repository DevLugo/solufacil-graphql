import { EmployeeCreateWithoutPhonesInput } from './employee-create-without-phones.input';
import { EmployeeCreateOrConnectWithoutPhonesInput } from './employee-create-or-connect-without-phones.input';
import { EmployeeUpsertWithoutPhonesInput } from './employee-upsert-without-phones.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutPhonesInput } from './employee-update-without-phones.input';
export declare class EmployeeUpdateOneWithoutPhonesInput {
    create?: EmployeeCreateWithoutPhonesInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutPhonesInput;
    upsert?: EmployeeUpsertWithoutPhonesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutPhonesInput;
}
