import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneCreateInput } from './phone-create.input';
import { PhoneUpdateInput } from './phone-update.input';

@ArgsType()
export class UpsertOnePhoneArgs {

    @Field(() => PhoneWhereUniqueInput, {nullable:false})
    where!: PhoneWhereUniqueInput;

    @Field(() => PhoneCreateInput, {nullable:false})
    create!: PhoneCreateInput;

    @Field(() => PhoneUpdateInput, {nullable:false})
    update!: PhoneUpdateInput;
}
