import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractUpdateInput } from './contract-update.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@ArgsType()
export class UpdateOneContractArgs {

    @Field(() => ContractUpdateInput, {nullable:false})
    data!: ContractUpdateInput;

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;
}
