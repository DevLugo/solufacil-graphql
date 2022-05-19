import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutBorrowerInput } from './document-create-without-borrower.input';
import { DocumentCreateOrConnectWithoutBorrowerInput } from './document-create-or-connect-without-borrower.input';
import { DocumentUpsertWithWhereUniqueWithoutBorrowerInput } from './document-upsert-with-where-unique-without-borrower.input';
import { DocumentCreateManyBorrowerInputEnvelope } from './document-create-many-borrower-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutBorrowerInput } from './document-update-with-where-unique-without-borrower.input';
import { DocumentUpdateManyWithWhereWithoutBorrowerInput } from './document-update-many-with-where-without-borrower.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';

@InputType()
export class DocumentUncheckedUpdateManyWithoutBorrowerInput {

    @Field(() => [DocumentCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<DocumentCreateWithoutBorrowerInput>;

    @Field(() => [DocumentCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutBorrowerInput>;

    @Field(() => [DocumentUpsertWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => DocumentCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyBorrowerInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    set?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    delete?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentUpdateWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    update?: Array<DocumentUpdateWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => [DocumentUpdateManyWithWhereWithoutBorrowerInput], {nullable:true})
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutBorrowerInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DocumentScalarWhereInput>;
}
