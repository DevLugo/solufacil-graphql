import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateNestedManyWithoutAvalInput } from '../phone/phone-create-nested-many-without-aval.input';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AvalCreateWithoutDocumentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PhoneCreateNestedManyWithoutAvalInput, {nullable:true})
    phones?: PhoneCreateNestedManyWithoutAvalInput;

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
