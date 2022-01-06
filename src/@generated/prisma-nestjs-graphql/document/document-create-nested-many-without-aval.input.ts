import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutAvalInput } from './document-create-without-aval.input';
import { DocumentCreateOrConnectWithoutAvalInput } from './document-create-or-connect-without-aval.input';
import { DocumentCreateManyAvalInputEnvelope } from './document-create-many-aval-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@InputType()
export class DocumentCreateNestedManyWithoutAvalInput {

    @Field(() => [DocumentCreateWithoutAvalInput], {nullable:true})
    create?: Array<DocumentCreateWithoutAvalInput>;

    @Field(() => [DocumentCreateOrConnectWithoutAvalInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutAvalInput>;

    @Field(() => DocumentCreateManyAvalInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyAvalInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;
}
