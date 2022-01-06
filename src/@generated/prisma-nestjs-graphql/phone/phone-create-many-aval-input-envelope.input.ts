import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateManyAvalInput } from './phone-create-many-aval.input';

@InputType()
export class PhoneCreateManyAvalInputEnvelope {

    @Field(() => [PhoneCreateManyAvalInput], {nullable:false})
    data!: Array<PhoneCreateManyAvalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
