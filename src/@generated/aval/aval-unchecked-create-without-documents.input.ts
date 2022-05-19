import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneUncheckedCreateNestedManyWithoutAvalInput } from '../phone/phone-unchecked-create-nested-many-without-aval.input';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AvalUncheckedCreateWithoutDocumentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PhoneUncheckedCreateNestedManyWithoutAvalInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutAvalInput;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @HideField()
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
