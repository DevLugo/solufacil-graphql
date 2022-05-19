import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeCreateInput } from './contract-type-create.input';

@ArgsType()
export class CreateOneContractTypeArgs {

    @Field(() => ContractTypeCreateInput, {nullable:false})
    data!: ContractTypeCreateInput;
}
