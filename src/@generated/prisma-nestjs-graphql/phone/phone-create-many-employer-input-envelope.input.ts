import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateManyEmployerInput } from './phone-create-many-employer.input';

@InputType()
export class PhoneCreateManyEmployerInputEnvelope {

    @Field(() => [PhoneCreateManyEmployerInput], {nullable:false})
    data!: Array<PhoneCreateManyEmployerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
