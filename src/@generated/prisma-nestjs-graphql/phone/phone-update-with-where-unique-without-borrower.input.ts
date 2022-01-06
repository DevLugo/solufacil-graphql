import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutBorrowerInput } from './phone-update-without-borrower.input';

@InputType()
export class PhoneUpdateWithWhereUniqueWithoutBorrowerInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutBorrowerInput, {nullable:false})
    data!: PhoneUpdateWithoutBorrowerInput;
}
