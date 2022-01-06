import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutEmployerInput } from './phone-update-without-employer.input';

@InputType()
export class PhoneUpdateWithWhereUniqueWithoutEmployerInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutEmployerInput, {nullable:false})
    data!: PhoneUpdateWithoutEmployerInput;
}
