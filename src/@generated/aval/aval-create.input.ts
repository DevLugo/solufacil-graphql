import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateNestedManyWithoutAvalInput } from '../phone/phone-create-nested-many-without-aval.input';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { DocumentCreateNestedManyWithoutAvalInput } from '../document/document-create-nested-many-without-aval.input';

@InputType()
export class AvalCreateInput {

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

    @Field(() => DocumentCreateNestedManyWithoutAvalInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutAvalInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
