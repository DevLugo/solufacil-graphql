import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentUncheckedCreateNestedManyWithoutAvalInput } from '../document/document-unchecked-create-nested-many-without-aval.input';

@InputType()
export class AvalUncheckedCreateWithoutPhonesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutAvalInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutAvalInput;
}
