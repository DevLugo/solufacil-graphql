import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerCreateManyInput } from './borrower-create-many.input';

@ArgsType()
export class CreateManyBorrowerArgs {

    @Field(() => [BorrowerCreateManyInput], {nullable:false})
    data!: Array<BorrowerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
