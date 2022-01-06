import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutAvalInput } from './document-create-without-aval.input';
import { DocumentCreateOrConnectWithoutAvalInput } from './document-create-or-connect-without-aval.input';
import { DocumentUpsertWithWhereUniqueWithoutAvalInput } from './document-upsert-with-where-unique-without-aval.input';
import { DocumentCreateManyAvalInputEnvelope } from './document-create-many-aval-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutAvalInput } from './document-update-with-where-unique-without-aval.input';
import { DocumentUpdateManyWithWhereWithoutAvalInput } from './document-update-many-with-where-without-aval.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';

@InputType()
export class DocumentUpdateManyWithoutAvalInput {

    @Field(() => [DocumentCreateWithoutAvalInput], {nullable:true})
    create?: Array<DocumentCreateWithoutAvalInput>;

    @Field(() => [DocumentCreateOrConnectWithoutAvalInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutAvalInput>;

    @Field(() => [DocumentUpsertWithWhereUniqueWithoutAvalInput], {nullable:true})
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutAvalInput>;

    @Field(() => DocumentCreateManyAvalInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyAvalInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    set?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    delete?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentUpdateWithWhereUniqueWithoutAvalInput], {nullable:true})
    update?: Array<DocumentUpdateWithWhereUniqueWithoutAvalInput>;

    @Field(() => [DocumentUpdateManyWithWhereWithoutAvalInput], {nullable:true})
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutAvalInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DocumentScalarWhereInput>;
}
