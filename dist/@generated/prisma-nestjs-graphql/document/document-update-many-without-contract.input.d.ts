import { DocumentCreateWithoutContractInput } from './document-create-without-contract.input';
import { DocumentCreateOrConnectWithoutContractInput } from './document-create-or-connect-without-contract.input';
import { DocumentUpsertWithWhereUniqueWithoutContractInput } from './document-upsert-with-where-unique-without-contract.input';
import { DocumentCreateManyContractInputEnvelope } from './document-create-many-contract-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutContractInput } from './document-update-with-where-unique-without-contract.input';
import { DocumentUpdateManyWithWhereWithoutContractInput } from './document-update-many-with-where-without-contract.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';
export declare class DocumentUpdateManyWithoutContractInput {
    create?: Array<DocumentCreateWithoutContractInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutContractInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutContractInput>;
    createMany?: DocumentCreateManyContractInputEnvelope;
    set?: Array<DocumentWhereUniqueInput>;
    disconnect?: Array<DocumentWhereUniqueInput>;
    delete?: Array<DocumentWhereUniqueInput>;
    connect?: Array<DocumentWhereUniqueInput>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutContractInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutContractInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
