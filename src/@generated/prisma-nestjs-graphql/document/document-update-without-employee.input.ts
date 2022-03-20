import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocumentTypeFieldUpdateOperationsInput } from '../prisma/enum-document-type-field-update-operations.input';
import { BorrowerUpdateOneWithoutDocumentsInput } from '../borrower/borrower-update-one-without-documents.input';
import { AvalUpdateOneWithoutDocumentsInput } from '../aval/aval-update-one-without-documents.input';
import { ContractUpdateOneWithoutDocumentsInput } from '../contract/contract-update-one-without-documents.input';

@InputType()
export class DocumentUpdateWithoutEmployeeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDocumentTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDocumentTypeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneWithoutDocumentsInput, {nullable:true})
    borrower?: BorrowerUpdateOneWithoutDocumentsInput;

    @Field(() => AvalUpdateOneWithoutDocumentsInput, {nullable:true})
    aval?: AvalUpdateOneWithoutDocumentsInput;

    @Field(() => ContractUpdateOneWithoutDocumentsInput, {nullable:true})
    contract?: ContractUpdateOneWithoutDocumentsInput;
}
