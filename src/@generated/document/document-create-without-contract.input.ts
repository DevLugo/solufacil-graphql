import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { BorrowerCreateNestedOneWithoutDocumentsInput } from '../borrower/borrower-create-nested-one-without-documents.input';
import { EmployeeCreateNestedOneWithoutDocumentsInput } from '../employee/employee-create-nested-one-without-documents.input';
import { AvalCreateNestedOneWithoutDocumentsInput } from '../aval/aval-create-nested-one-without-documents.input';

@InputType()
export class DocumentCreateWithoutContractInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => BorrowerCreateNestedOneWithoutDocumentsInput, {nullable:true})
    borrower?: BorrowerCreateNestedOneWithoutDocumentsInput;

    @Field(() => EmployeeCreateNestedOneWithoutDocumentsInput, {nullable:true})
    employee?: EmployeeCreateNestedOneWithoutDocumentsInput;

    @Field(() => AvalCreateNestedOneWithoutDocumentsInput, {nullable:true})
    aval?: AvalCreateNestedOneWithoutDocumentsInput;
}