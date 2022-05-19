import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneCreateWithoutAvalInput } from './phone-create-without-aval.input';

@InputType()
export class PhoneCreateOrConnectWithoutAvalInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneCreateWithoutAvalInput, {nullable:false})
    create!: PhoneCreateWithoutAvalInput;
}
