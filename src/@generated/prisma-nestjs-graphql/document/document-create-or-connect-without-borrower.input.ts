import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateWithoutBorrowerInput } from './document-create-without-borrower.input';

@InputType()
export class DocumentCreateOrConnectWithoutBorrowerInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentCreateWithoutBorrowerInput, {nullable:false})
    create!: DocumentCreateWithoutBorrowerInput;
}
