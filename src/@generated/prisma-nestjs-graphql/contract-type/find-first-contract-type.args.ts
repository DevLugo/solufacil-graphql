import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeWhereInput } from './contract-type-where.input';
import { ContractTypeOrderByWithRelationInput } from './contract-type-order-by-with-relation.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContractTypeScalarFieldEnum } from './contract-type-scalar-field.enum';

@ArgsType()
export class FindFirstContractTypeArgs {

    @Field(() => ContractTypeWhereInput, {nullable:true})
    where?: ContractTypeWhereInput;

    @Field(() => [ContractTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContractTypeOrderByWithRelationInput>;

    @Field(() => ContractTypeWhereUniqueInput, {nullable:true})
    cursor?: ContractTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContractTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ContractTypeScalarFieldEnum>;
}
