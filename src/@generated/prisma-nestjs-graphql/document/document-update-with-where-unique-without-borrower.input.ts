import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutBorrowerInput } from './document-update-without-borrower.input';

@InputType()
export class DocumentUpdateWithWhereUniqueWithoutBorrowerInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutBorrowerInput, {nullable:false})
    data!: DocumentUpdateWithoutBorrowerInput;
}
