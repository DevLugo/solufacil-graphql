import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutEmployeeInput } from './document-create-without-employee.input';
import { DocumentCreateOrConnectWithoutEmployeeInput } from './document-create-or-connect-without-employee.input';
import { DocumentCreateManyEmployeeInputEnvelope } from './document-create-many-employee-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@InputType()
export class DocumentCreateNestedManyWithoutEmployeeInput {

    @Field(() => [DocumentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<DocumentCreateWithoutEmployeeInput>;

    @Field(() => [DocumentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => DocumentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyEmployeeInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;
}
