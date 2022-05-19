import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhoneCreateNestedManyWithoutBorrowerInput } from '../phone/phone-create-nested-many-without-borrower.input';
import { DocumentCreateNestedManyWithoutBorrowerInput } from '../document/document-create-nested-many-without-borrower.input';
import { ContractCreateNestedManyWithoutBorrowerInput } from '../contract/contract-create-nested-many-without-borrower.input';
import { LocalCreateNestedManyWithoutBorrowerInput } from '../local/local-create-nested-many-without-borrower.input';

@InputType()
export class BorrowerCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;

    @Field(() => PhoneCreateNestedManyWithoutBorrowerInput, {nullable:true})
    phones?: PhoneCreateNestedManyWithoutBorrowerInput;

    @Field(() => DocumentCreateNestedManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutBorrowerInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ContractCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractCreateNestedManyWithoutBorrowerInput;

    @Field(() => LocalCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Local?: LocalCreateNestedManyWithoutBorrowerInput;
}
