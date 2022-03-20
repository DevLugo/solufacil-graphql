import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateManyContractTypeInput } from './contract-create-many-contract-type.input';

@InputType()
export class ContractCreateManyContractTypeInputEnvelope {

    @Field(() => [ContractCreateManyContractTypeInput], {nullable:false})
    data!: Array<ContractCreateManyContractTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
