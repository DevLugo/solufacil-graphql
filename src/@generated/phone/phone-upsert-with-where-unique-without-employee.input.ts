import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutEmployeeInput } from './phone-update-without-employee.input';
import { PhoneCreateWithoutEmployeeInput } from './phone-create-without-employee.input';

@InputType()
export class PhoneUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutEmployeeInput, {nullable:false})
    update!: PhoneUpdateWithoutEmployeeInput;

    @Field(() => PhoneCreateWithoutEmployeeInput, {nullable:false})
    create!: PhoneCreateWithoutEmployeeInput;
}
