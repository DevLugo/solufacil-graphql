import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractWhereInput } from './contract-where.input';

@ArgsType()
export class DeleteManyContractArgs {

    @Field(() => ContractWhereInput, {nullable:true})
    where?: ContractWhereInput;
}
