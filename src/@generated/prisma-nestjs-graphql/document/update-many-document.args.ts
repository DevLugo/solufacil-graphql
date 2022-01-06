import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentUpdateManyMutationInput } from './document-update-many-mutation.input';
import { DocumentWhereInput } from './document-where.input';

@ArgsType()
export class UpdateManyDocumentArgs {

    @Field(() => DocumentUpdateManyMutationInput, {nullable:false})
    data!: DocumentUpdateManyMutationInput;

    @Field(() => DocumentWhereInput, {nullable:true})
    where?: DocumentWhereInput;
}
