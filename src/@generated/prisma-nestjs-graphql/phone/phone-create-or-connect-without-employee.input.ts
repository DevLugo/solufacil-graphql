import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneCreateWithoutEmployeeInput } from './phone-create-without-employee.input';

@InputType()
export class PhoneCreateOrConnectWithoutEmployeeInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneCreateWithoutEmployeeInput, {nullable:false})
    create!: PhoneCreateWithoutEmployeeInput;
}
