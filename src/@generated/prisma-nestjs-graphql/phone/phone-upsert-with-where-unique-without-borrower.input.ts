import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutBorrowerInput } from './phone-update-without-borrower.input';
import { PhoneCreateWithoutBorrowerInput } from './phone-create-without-borrower.input';

@InputType()
export class PhoneUpsertWithWhereUniqueWithoutBorrowerInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutBorrowerInput, {nullable:false})
    update!: PhoneUpdateWithoutBorrowerInput;

    @Field(() => PhoneCreateWithoutBorrowerInput, {nullable:false})
    create!: PhoneCreateWithoutBorrowerInput;
}
