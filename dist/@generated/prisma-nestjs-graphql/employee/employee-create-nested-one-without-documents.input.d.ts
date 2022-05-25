import { EmployeeCreateWithoutDocumentsInput } from './employee-create-without-documents.input';
import { EmployeeCreateOrConnectWithoutDocumentsInput } from './employee-create-or-connect-without-documents.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutDocumentsInput {
    create?: EmployeeCreateWithoutDocumentsInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput;
    connect?: EmployeeWhereUniqueInput;
}
