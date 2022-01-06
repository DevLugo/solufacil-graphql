import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneUpdateManyMutationInput } from './phone-update-many-mutation.input';
import { PhoneWhereInput } from './phone-where.input';

@ArgsType()
export class UpdateManyPhoneArgs {

    @Field(() => PhoneUpdateManyMutationInput, {nullable:false})
    data!: PhoneUpdateManyMutationInput;

    @Field(() => PhoneWhereInput, {nullable:true})
    where?: PhoneWhereInput;
}
