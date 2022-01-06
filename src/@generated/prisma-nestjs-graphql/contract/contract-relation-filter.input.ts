import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereInput } from './contract-where.input';

@InputType()
export class ContractRelationFilter {

    @Field(() => ContractWhereInput, {nullable:true})
    is?: ContractWhereInput;

    @Field(() => ContractWhereInput, {nullable:true})
    isNot?: ContractWhereInput;
}
