import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithoutEmployeeInput } from './phone-update-without-employee.input';

@InputType()
export class PhoneUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneUpdateWithoutEmployeeInput, {nullable:false})
    data!: PhoneUpdateWithoutEmployeeInput;
}
