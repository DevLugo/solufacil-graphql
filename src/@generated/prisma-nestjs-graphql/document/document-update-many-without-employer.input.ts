import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutEmployerInput } from './document-create-without-employer.input';
import { DocumentCreateOrConnectWithoutEmployerInput } from './document-create-or-connect-without-employer.input';
import { DocumentUpsertWithWhereUniqueWithoutEmployerInput } from './document-upsert-with-where-unique-without-employer.input';
import { DocumentCreateManyEmployerInputEnvelope } from './document-create-many-employer-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutEmployerInput } from './document-update-with-where-unique-without-employer.input';
import { DocumentUpdateManyWithWhereWithoutEmployerInput } from './document-update-many-with-where-without-employer.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';

@InputType()
export class DocumentUpdateManyWithoutEmployerInput {

    @Field(() => [DocumentCreateWithoutEmployerInput], {nullable:true})
    create?: Array<DocumentCreateWithoutEmployerInput>;

    @Field(() => [DocumentCreateOrConnectWithoutEmployerInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutEmployerInput>;

    @Field(() => [DocumentUpsertWithWhereUniqueWithoutEmployerInput], {nullable:true})
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutEmployerInput>;

    @Field(() => DocumentCreateManyEmployerInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyEmployerInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    set?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    delete?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentUpdateWithWhereUniqueWithoutEmployerInput], {nullable:true})
    update?: Array<DocumentUpdateWithWhereUniqueWithoutEmployerInput>;

    @Field(() => [DocumentUpdateManyWithWhereWithoutEmployerInput], {nullable:true})
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutEmployerInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DocumentScalarWhereInput>;
}
