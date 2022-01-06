import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutContractInput } from './document-create-without-contract.input';
import { DocumentCreateOrConnectWithoutContractInput } from './document-create-or-connect-without-contract.input';
import { DocumentUpsertWithWhereUniqueWithoutContractInput } from './document-upsert-with-where-unique-without-contract.input';
import { DocumentCreateManyContractInputEnvelope } from './document-create-many-contract-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutContractInput } from './document-update-with-where-unique-without-contract.input';
import { DocumentUpdateManyWithWhereWithoutContractInput } from './document-update-many-with-where-without-contract.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';

@InputType()
export class DocumentUncheckedUpdateManyWithoutContractInput {

    @Field(() => [DocumentCreateWithoutContractInput], {nullable:true})
    create?: Array<DocumentCreateWithoutContractInput>;

    @Field(() => [DocumentCreateOrConnectWithoutContractInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutContractInput>;

    @Field(() => [DocumentUpsertWithWhereUniqueWithoutContractInput], {nullable:true})
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutContractInput>;

    @Field(() => DocumentCreateManyContractInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyContractInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    set?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    delete?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentUpdateWithWhereUniqueWithoutContractInput], {nullable:true})
    update?: Array<DocumentUpdateWithWhereUniqueWithoutContractInput>;

    @Field(() => [DocumentUpdateManyWithWhereWithoutContractInput], {nullable:true})
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutContractInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DocumentScalarWhereInput>;
}
