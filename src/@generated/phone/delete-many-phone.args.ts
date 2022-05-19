import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneWhereInput } from './phone-where.input';

@ArgsType()
export class DeleteManyPhoneArgs {

    @Field(() => PhoneWhereInput, {nullable:true})
    where?: PhoneWhereInput;
}
