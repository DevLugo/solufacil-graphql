import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereInput } from './loan-where.input';

@ArgsType()
export class DeleteManyLoanArgs {

    @Field(() => LoanWhereInput, {nullable:true})
    where?: LoanWhereInput;
}
