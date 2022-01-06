import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocumentTypeFieldUpdateOperationsInput } from '../prisma/enum-document-type-field-update-operations.input';
import { BorrowerUpdateOneWithoutDocumentsInput } from '../borrower/borrower-update-one-without-documents.input';
import { EmployeeUpdateOneWithoutDocumentsInput } from '../employee/employee-update-one-without-documents.input';
import { ContractUpdateOneWithoutDocumentsInput } from '../contract/contract-update-one-without-documents.input';

@InputType()
export class DocumentUpdateWithoutAvalInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDocumentTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDocumentTypeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneWithoutDocumentsInput, {nullable:true})
    Borrower?: BorrowerUpdateOneWithoutDocumentsInput;

    @Field(() => EmployeeUpdateOneWithoutDocumentsInput, {nullable:true})
    Employee?: EmployeeUpdateOneWithoutDocumentsInput;

    @Field(() => ContractUpdateOneWithoutDocumentsInput, {nullable:true})
    Contract?: ContractUpdateOneWithoutDocumentsInput;
}
