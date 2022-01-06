import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutEmployerInput } from './phone-update-without-employer.input';
import { PhoneCreateWithoutEmployerInput } from './phone-create-without-employer.input';

@InputType()
export class PhoneUpsertWithWhereUniqueWithoutEmployerInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutEmployerInput, {nullable:false})
    update!: PhoneUpdateWithoutEmployerInput;

    @Field(() => PhoneCreateWithoutEmployerInput, {nullable:false})
    create!: PhoneCreateWithoutEmployerInput;
}
