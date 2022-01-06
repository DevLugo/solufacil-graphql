import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';

@ArgsType()
export class DeleteOnePhoneArgs {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;
}
