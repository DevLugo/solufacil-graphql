import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutAvalInput } from './phone-update-without-aval.input';
import { PhoneCreateWithoutAvalInput } from './phone-create-without-aval.input';

@InputType()
export class PhoneUpsertWithWhereUniqueWithoutAvalInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutAvalInput, {nullable:false})
    update!: PhoneUpdateWithoutAvalInput;

    @Field(() => PhoneCreateWithoutAvalInput, {nullable:false})
    create!: PhoneCreateWithoutAvalInput;
}
