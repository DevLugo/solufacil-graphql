import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneCreateInput } from './phone-create.input';

@ArgsType()
export class CreateOnePhoneArgs {

    @Field(() => PhoneCreateInput, {nullable:false})
    data!: PhoneCreateInput;
}
