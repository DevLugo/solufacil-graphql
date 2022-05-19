import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateManyLoanLeadInput } from './contract-create-many-loan-lead.input';

@InputType()
export class ContractCreateManyLoanLeadInputEnvelope {

    @Field(() => [ContractCreateManyLoanLeadInput], {nullable:false})
    data!: Array<ContractCreateManyLoanLeadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
