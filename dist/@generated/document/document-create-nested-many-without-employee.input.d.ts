import { DocumentCreateWithoutEmployeeInput } from './document-create-without-employee.input';
import { DocumentCreateOrConnectWithoutEmployeeInput } from './document-create-or-connect-without-employee.input';
import { DocumentCreateManyEmployeeInputEnvelope } from './document-create-many-employee-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
export declare class DocumentCreateNestedManyWithoutEmployeeInput {
    create?: Array<DocumentCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutEmployeeInput>;
    createMany?: DocumentCreateManyEmployeeInputEnvelope;
    connect?: Array<DocumentWhereUniqueInput>;
}
