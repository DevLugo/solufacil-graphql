import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeWhereInput } from './contract-type-where.input';

@ArgsType()
export class DeleteManyContractTypeArgs {

    @Field(() => ContractTypeWhereInput, {nullable:true})
    where?: ContractTypeWhereInput;
}
