import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractCreateInput } from './contract-create.input';

@ArgsType()
export class CreateOneContractArgs {

    @Field(() => ContractCreateInput, {nullable:false})
    data!: ContractCreateInput;
}
