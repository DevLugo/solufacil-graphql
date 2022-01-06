import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { BorrowerCreateNestedOneWithoutDocumentsInput } from '../borrower/borrower-create-nested-one-without-documents.input';
import { EmployeeCreateNestedOneWithoutDocumentsInput } from '../employee/employee-create-nested-one-without-documents.input';
import { ContractCreateNestedOneWithoutDocumentsInput } from '../contract/contract-create-nested-one-without-documents.input';

@InputType()
export class DocumentCreateWithoutAvalInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => BorrowerCreateNestedOneWithoutDocumentsInput, {nullable:true})
    Borrower?: BorrowerCreateNestedOneWithoutDocumentsInput;

    @Field(() => EmployeeCreateNestedOneWithoutDocumentsInput, {nullable:true})
    Employee?: EmployeeCreateNestedOneWithoutDocumentsInput;

    @Field(() => ContractCreateNestedOneWithoutDocumentsInput, {nullable:true})
    Contract?: ContractCreateNestedOneWithoutDocumentsInput;
}
