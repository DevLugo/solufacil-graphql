import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateManyLoanTypeInput } from './loan-create-many-loan-type.input';

@InputType()
export class LoanCreateManyLoanTypeInputEnvelope {

    @Field(() => [LoanCreateManyLoanTypeInput], {nullable:false})
    data!: Array<LoanCreateManyLoanTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
