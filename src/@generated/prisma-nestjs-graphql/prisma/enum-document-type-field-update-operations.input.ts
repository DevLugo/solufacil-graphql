import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from './document-type.enum';

@InputType()
export class EnumDocumentTypeFieldUpdateOperationsInput {

    @Field(() => DocumentType, {nullable:true})
    set?: keyof typeof DocumentType;
}
