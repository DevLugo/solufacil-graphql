import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PhoneUncheckedCreateNestedManyWithoutBorrowerInput } from '../phone/phone-unchecked-create-nested-many-without-borrower.input';
import { HideField } from '@nestjs/graphql';
import { ContractUncheckedCreateNestedManyWithoutBorrowerInput } from '../contract/contract-unchecked-create-nested-many-without-borrower.input';
import { LocalUncheckedCreateNestedManyWithoutBorrowerInput } from '../local/local-unchecked-create-nested-many-without-borrower.input';

@InputType()
export class BorrowerUncheckedCreateWithoutDocumentsInput {

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

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ContractUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractUncheckedCreateNestedManyWithoutBorrowerInput;

    @Field(() => LocalUncheckedCreateNestedManyWithoutBorrowerInput, {nullable:true})
    Local?: LocalUncheckedCreateNestedManyWithoutBorrowerInput;
}
