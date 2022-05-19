import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentCreateInput } from './document-create.input';

@ArgsType()
export class CreateOneDocumentArgs {

    @Field(() => DocumentCreateInput, {nullable:false})
    data!: DocumentCreateInput;
}
