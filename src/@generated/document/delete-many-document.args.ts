import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentWhereInput } from './document-where.input';

@ArgsType()
export class DeleteManyDocumentArgs {

    @Field(() => DocumentWhereInput, {nullable:true})
    where?: DocumentWhereInput;
}
