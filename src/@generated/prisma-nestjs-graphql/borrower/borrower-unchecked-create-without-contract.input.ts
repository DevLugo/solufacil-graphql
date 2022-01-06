import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PhoneUncheckedCreateNestedManyWithoutBorrowerInput } from '../phone/phone-unchecked-create-nested-many-without-borrower.input';
import { DocumentUncheckedCreateNestedManyWithoutBorrowerInput } from '../document/document-unchecked-create-nested-many-without-borrower.input';

@InputType()
export class BorrowerUncheckedCreateWithoutContractInput {

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

    @Field(() => PhoneUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutBorrowerInput;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutBorrowerInput;
}
