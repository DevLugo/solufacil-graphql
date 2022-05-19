import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhoneUncheckedCreateNestedManyWithoutBorrowerInput } from '../phone/phone-unchecked-create-nested-many-without-borrower.input';
import { DocumentUncheckedCreateNestedManyWithoutBorrowerInput } from '../document/document-unchecked-create-nested-many-without-borrower.input';
import { HideField } from '@nestjs/graphql';
import { LocalUncheckedCreateNestedManyWithoutBorrowerInput } from '../local/local-unchecked-create-nested-many-without-borrower.input';

@InputType()
export class BorrowerUncheckedCreateWithoutContractInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;

    @Field(() => PhoneUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutBorrowerInput;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutBorrowerInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LocalUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Local?: LocalUncheckedCreateNestedManyWithoutBorrowerInput;
}
