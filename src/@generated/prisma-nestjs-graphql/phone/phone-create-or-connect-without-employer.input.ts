import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneCreateWithoutEmployerInput } from './phone-create-without-employer.input';

@InputType()
export class PhoneCreateOrConnectWithoutEmployerInput {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneCreateWithoutEmployerInput, {nullable:false})
    create!: PhoneCreateWithoutEmployerInput;
}
