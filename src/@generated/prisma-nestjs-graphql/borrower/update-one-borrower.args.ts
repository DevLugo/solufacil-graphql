import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerUpdateInput } from './borrower-update.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@ArgsType()
export class UpdateOneBorrowerArgs {

    @Field(() => BorrowerUpdateInput, {nullable:false})
    data!: BorrowerUpdateInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;
}
