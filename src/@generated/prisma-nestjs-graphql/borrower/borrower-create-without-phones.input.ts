import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { DocumentCreateNestedManyWithoutBorrowerInput } from '../document/document-create-nested-many-without-borrower.input';
import { ContractCreateNestedManyWithoutBorrowerInput } from '../contract/contract-create-nested-many-without-borrower.input';

@InputType()
export class BorrowerCreateWithoutPhonesInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => DocumentCreateNestedManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutBorrowerInput;

    @Field(() => ContractCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractCreateNestedManyWithoutBorrowerInput;
}
