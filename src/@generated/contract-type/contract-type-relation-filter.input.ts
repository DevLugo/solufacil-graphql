import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractTypeWhereInput } from './contract-type-where.input';

@InputType()
export class ContractTypeRelationFilter {

    @Field(() => ContractTypeWhereInput, {nullable:true})
    is?: ContractTypeWhereInput;

    @Field(() => ContractTypeWhereInput, {nullable:true})
    isNot?: ContractTypeWhereInput;
}
