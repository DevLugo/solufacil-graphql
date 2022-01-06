import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentScalarWhereInput } from './document-scalar-where.input';
import { DocumentUpdateManyMutationInput } from './document-update-many-mutation.input';

@InputType()
export class DocumentUpdateManyWithWhereWithoutEmployeeInput {

    @Field(() => DocumentScalarWhereInput, {nullable:false})
    where!: DocumentScalarWhereInput;

    @Field(() => DocumentUpdateManyMutationInput, {nullable:false})
    data!: DocumentUpdateManyMutationInput;
}
