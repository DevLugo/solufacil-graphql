import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalCreateManyBorrowerInput } from './local-create-many-borrower.input';

@InputType()
export class LocalCreateManyBorrowerInputEnvelope {

    @Field(() => [LocalCreateManyBorrowerInput], {nullable:false})
    data!: Array<LocalCreateManyBorrowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
