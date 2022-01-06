import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateManyBorrowerInput } from './contract-create-many-borrower.input';

@InputType()
export class ContractCreateManyBorrowerInputEnvelope {

    @Field(() => [ContractCreateManyBorrowerInput], {nullable:false})
    data!: Array<ContractCreateManyBorrowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
