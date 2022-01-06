import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateManyContractInput } from './loan-create-many-contract.input';

@InputType()
export class LoanCreateManyContractInputEnvelope {

    @Field(() => [LoanCreateManyContractInput], {nullable:false})
    data!: Array<LoanCreateManyContractInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
