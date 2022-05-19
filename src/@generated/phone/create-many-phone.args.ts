import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneCreateManyInput } from './phone-create-many.input';

@ArgsType()
export class CreateManyPhoneArgs {

    @Field(() => [PhoneCreateManyInput], {nullable:false})
    data!: Array<PhoneCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
