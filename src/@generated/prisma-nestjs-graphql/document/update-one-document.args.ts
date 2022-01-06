import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentUpdateInput } from './document-update.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@ArgsType()
export class UpdateOneDocumentArgs {

    @Field(() => DocumentUpdateInput, {nullable:false})
    data!: DocumentUpdateInput;

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;
}
