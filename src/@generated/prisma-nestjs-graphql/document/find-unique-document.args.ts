import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@ArgsType()
export class FindUniqueDocumentArgs {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;
}
