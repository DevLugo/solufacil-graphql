import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanUpdateManyMutationInput } from './loan-update-many-mutation.input';
import { LoanWhereInput } from './loan-where.input';

@ArgsType()
export class UpdateManyLoanArgs {

    @Field(() => LoanUpdateManyMutationInput, {nullable:false})
    data!: LoanUpdateManyMutationInput;

    @Field(() => LoanWhereInput, {nullable:true})
    where?: LoanWhereInput;
}
