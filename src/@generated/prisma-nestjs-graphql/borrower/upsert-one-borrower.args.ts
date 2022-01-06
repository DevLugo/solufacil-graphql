import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateInput } from './borrower-create.input';
import { BorrowerUpdateInput } from './borrower-update.input';

@ArgsType()
export class UpsertOneBorrowerArgs {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerCreateInput, {nullable:false})
    create!: BorrowerCreateInput;

    @Field(() => BorrowerUpdateInput, {nullable:false})
    update!: BorrowerUpdateInput;
}
