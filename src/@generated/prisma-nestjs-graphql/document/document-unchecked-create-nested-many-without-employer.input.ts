import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutEmployerInput } from './document-create-without-employer.input';
import { DocumentCreateOrConnectWithoutEmployerInput } from './document-create-or-connect-without-employer.input';
import { DocumentCreateManyEmployerInputEnvelope } from './document-create-many-employer-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@InputType()
export class DocumentUncheckedCreateNestedManyWithoutEmployerInput {

    @Field(() => [DocumentCreateWithoutEmployerInput], {nullable:true})
    create?: Array<DocumentCreateWithoutEmployerInput>;

    @Field(() => [DocumentCreateOrConnectWithoutEmployerInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutEmployerInput>;

    @Field(() => DocumentCreateManyEmployerInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyEmployerInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;
}
