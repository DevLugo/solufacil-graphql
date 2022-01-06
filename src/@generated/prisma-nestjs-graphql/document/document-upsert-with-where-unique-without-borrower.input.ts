import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutBorrowerInput } from './document-update-without-borrower.input';
import { DocumentCreateWithoutBorrowerInput } from './document-create-without-borrower.input';

@InputType()
export class DocumentUpsertWithWhereUniqueWithoutBorrowerInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutBorrowerInput, {nullable:false})
    update!: DocumentUpdateWithoutBorrowerInput;

    @Field(() => DocumentCreateWithoutBorrowerInput, {nullable:false})
    create!: DocumentCreateWithoutBorrowerInput;
}
