import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { BorrowerCreateNestedOneWithoutDocumentsInput } from '../borrower/borrower-create-nested-one-without-documents.input';
import { AvalCreateNestedOneWithoutDocumentsInput } from '../aval/aval-create-nested-one-without-documents.input';
import { ContractCreateNestedOneWithoutDocumentsInput } from '../contract/contract-create-nested-one-without-documents.input';

@InputType()
export class DocumentCreateWithoutEmployerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => BorrowerCreateNestedOneWithoutDocumentsInput, {nullable:true})
    Borrower?: BorrowerCreateNestedOneWithoutDocumentsInput;

    @Field(() => AvalCreateNestedOneWithoutDocumentsInput, {nullable:true})
    aval?: AvalCreateNestedOneWithoutDocumentsInput;

    @Field(() => ContractCreateNestedOneWithoutDocumentsInput, {nullable:true})
    Contract?: ContractCreateNestedOneWithoutDocumentsInput;
}
