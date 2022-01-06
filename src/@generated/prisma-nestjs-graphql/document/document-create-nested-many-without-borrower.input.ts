import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutBorrowerInput } from './document-create-without-borrower.input';
import { DocumentCreateOrConnectWithoutBorrowerInput } from './document-create-or-connect-without-borrower.input';
import { DocumentCreateManyBorrowerInputEnvelope } from './document-create-many-borrower-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@InputType()
export class DocumentCreateNestedManyWithoutBorrowerInput {

    @Field(() => [DocumentCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<DocumentCreateWithoutBorrowerInput>;

    @Field(() => [DocumentCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutBorrowerInput>;

    @Field(() => DocumentCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyBorrowerInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;
}
