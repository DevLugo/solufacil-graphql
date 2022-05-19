import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@ArgsType()
export class FindUniqueBorrowerArgs {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;
}
