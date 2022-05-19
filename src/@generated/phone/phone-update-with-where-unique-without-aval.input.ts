import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutAvalInput } from './phone-update-without-aval.input';

@InputType()
export class PhoneUpdateWithWhereUniqueWithoutAvalInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutAvalInput, {nullable:false})
    data!: PhoneUpdateWithoutAvalInput;
}
