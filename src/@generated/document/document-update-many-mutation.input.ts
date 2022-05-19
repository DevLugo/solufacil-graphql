import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocumentTypeFieldUpdateOperationsInput } from '../prisma/enum-document-type-field-update-operations.input';

@InputType()
export class DocumentUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDocumentTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDocumentTypeFieldUpdateOperationsInput;
}
