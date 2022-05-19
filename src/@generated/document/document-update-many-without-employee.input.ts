import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutEmployeeInput } from './document-create-without-employee.input';
import { DocumentCreateOrConnectWithoutEmployeeInput } from './document-create-or-connect-without-employee.input';
import { DocumentUpsertWithWhereUniqueWithoutEmployeeInput } from './document-upsert-with-where-unique-without-employee.input';
import { DocumentCreateManyEmployeeInputEnvelope } from './document-create-many-employee-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutEmployeeInput } from './document-update-with-where-unique-without-employee.input';
import { DocumentUpdateManyWithWhereWithoutEmployeeInput } from './document-update-many-with-where-without-employee.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';

@InputType()
export class DocumentUpdateManyWithoutEmployeeInput {

    @Field(() => [DocumentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<DocumentCreateWithoutEmployeeInput>;

    @Field(() => [DocumentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [DocumentUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => DocumentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyEmployeeInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    set?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    delete?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;

    @Field(() => [DocumentUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<DocumentUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [DocumentUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DocumentScalarWhereInput>;
}
