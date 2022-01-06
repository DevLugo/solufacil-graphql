import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanCreateManyInput } from './loan-create-many.input';

@ArgsType()
export class CreateManyLoanArgs {

    @Field(() => [LoanCreateManyInput], {nullable:false})
    data!: Array<LoanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
