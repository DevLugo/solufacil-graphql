import { DocumentCreateWithoutEmployeeInput } from './document-create-without-employee.input';
import { DocumentCreateOrConnectWithoutEmployeeInput } from './document-create-or-connect-without-employee.input';
import { DocumentUpsertWithWhereUniqueWithoutEmployeeInput } from './document-upsert-with-where-unique-without-employee.input';
import { DocumentCreateManyEmployeeInputEnvelope } from './document-create-many-employee-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutEmployeeInput } from './document-update-with-where-unique-without-employee.input';
import { DocumentUpdateManyWithWhereWithoutEmployeeInput } from './document-update-many-with-where-without-employee.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';
export declare class DocumentUpdateManyWithoutEmployeeInput {
    create?: Array<DocumentCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: DocumentCreateManyEmployeeInputEnvelope;
    set?: Array<DocumentWhereUniqueInput>;
    disconnect?: Array<DocumentWhereUniqueInput>;
    delete?: Array<DocumentWhereUniqueInput>;
    connect?: Array<DocumentWhereUniqueInput>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
