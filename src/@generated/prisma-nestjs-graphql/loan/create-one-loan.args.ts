import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanCreateInput } from './loan-create.input';

@ArgsType()
export class CreateOneLoanArgs {

    @Field(() => LoanCreateInput, {nullable:false})
    data!: LoanCreateInput;
}
