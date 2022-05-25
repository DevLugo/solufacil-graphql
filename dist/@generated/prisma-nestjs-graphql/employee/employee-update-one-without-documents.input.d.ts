import { EmployeeCreateWithoutDocumentsInput } from './employee-create-without-documents.input';
import { EmployeeCreateOrConnectWithoutDocumentsInput } from './employee-create-or-connect-without-documents.input';
import { EmployeeUpsertWithoutDocumentsInput } from './employee-upsert-without-documents.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutDocumentsInput } from './employee-update-without-documents.input';
export declare class EmployeeUpdateOneWithoutDocumentsInput {
    create?: EmployeeCreateWithoutDocumentsInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput;
    upsert?: EmployeeUpsertWithoutDocumentsInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutDocumentsInput;
}
