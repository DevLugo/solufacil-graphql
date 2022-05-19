import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerCreateInput } from './borrower-create.input';

@ArgsType()
export class CreateOneBorrowerArgs {

    @Field(() => BorrowerCreateInput, {nullable:false})
    data!: BorrowerCreateInput;
}
