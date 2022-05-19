import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateInput } from './loan-create.input';
import { LoanUpdateInput } from './loan-update.input';

@ArgsType()
export class UpsertOneLoanArgs {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateInput, {nullable:false})
    create!: LoanCreateInput;

    @Field(() => LoanUpdateInput, {nullable:false})
    update!: LoanUpdateInput;
}
