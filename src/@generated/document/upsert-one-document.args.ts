import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateInput } from './document-create.input';
import { DocumentUpdateInput } from './document-update.input';

@ArgsType()
export class UpsertOneDocumentArgs {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentCreateInput, {nullable:false})
    create!: DocumentCreateInput;

    @Field(() => DocumentUpdateInput, {nullable:false})
    update!: DocumentUpdateInput;
}
