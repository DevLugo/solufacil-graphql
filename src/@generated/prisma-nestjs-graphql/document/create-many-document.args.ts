import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentCreateManyInput } from './document-create-many.input';

@ArgsType()
export class CreateManyDocumentArgs {

    @Field(() => [DocumentCreateManyInput], {nullable:false})
    data!: Array<DocumentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
