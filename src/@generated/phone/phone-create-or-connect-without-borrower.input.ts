import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneCreateWithoutBorrowerInput } from './phone-create-without-borrower.input';

@InputType()
export class PhoneCreateOrConnectWithoutBorrowerInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneCreateWithoutBorrowerInput, {nullable:false})
    create!: PhoneCreateWithoutBorrowerInput;
}
