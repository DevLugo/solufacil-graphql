import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerWhereInput } from './borrower-where.input';

@ArgsType()
export class DeleteManyBorrowerArgs {

    @Field(() => BorrowerWhereInput, {nullable:true})
    where?: BorrowerWhereInput;
}
