import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneUncheckedCreateNestedManyWithoutAvalInput } from '../phone/phone-unchecked-create-nested-many-without-aval.input';

@InputType()
export class AvalUncheckedCreateWithoutDocumentsInput {

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

    @Field(() => PhoneUncheckedCreateNestedManyWithoutAvalInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutAvalInput;
}
