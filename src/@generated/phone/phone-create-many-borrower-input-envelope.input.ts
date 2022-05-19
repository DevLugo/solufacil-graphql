import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateManyBorrowerInput } from './phone-create-many-borrower.input';

@InputType()
export class PhoneCreateManyBorrowerInputEnvelope {

    @Field(() => [PhoneCreateManyBorrowerInput], {nullable:false})
    data!: Array<PhoneCreateManyBorrowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
