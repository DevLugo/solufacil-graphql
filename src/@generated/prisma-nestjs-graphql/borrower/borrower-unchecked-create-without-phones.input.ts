import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { DocumentUncheckedCreateNestedManyWithoutBorrowerInput } from '../document/document-unchecked-create-nested-many-without-borrower.input';
import { ContractUncheckedCreateNestedManyWithoutBorrowerInput } from '../contract/contract-unchecked-create-nested-many-without-borrower.input';

@InputType()
export class BorrowerUncheckedCreateWithoutPhonesInput {

    @Field(() => String, {nullable:true})
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

    @Field(() => DocumentUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutBorrowerInput;

    @Field(() => ContractUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractUncheckedCreateNestedManyWithoutBorrowerInput;
}
