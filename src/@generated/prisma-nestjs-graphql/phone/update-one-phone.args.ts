import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneUpdateInput } from './phone-update.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';

@ArgsType()
export class UpdateOnePhoneArgs {

    @Field(() => PhoneUpdateInput, {nullable:false})
    data!: PhoneUpdateInput;

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;
}
