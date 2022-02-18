import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateManyReferenceInput } from './borrower-create-many-reference.input';

@InputType()
export class BorrowerCreateManyReferenceInputEnvelope {

    @Field(() => [BorrowerCreateManyReferenceInput], {nullable:false})
    data!: Array<BorrowerCreateManyReferenceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
