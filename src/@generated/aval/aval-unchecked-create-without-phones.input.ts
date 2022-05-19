import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { DocumentUncheckedCreateNestedManyWithoutAvalInput } from '../document/document-unchecked-create-nested-many-without-aval.input';

@InputType()
export class AvalUncheckedCreateWithoutPhonesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @HideField()
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutAvalInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutAvalInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
