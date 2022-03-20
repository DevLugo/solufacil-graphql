import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractScalarWhereInput } from './contract-scalar-where.input';
import { ContractUpdateManyMutationInput } from './contract-update-many-mutation.input';

@InputType()
export class ContractUpdateManyWithWhereWithoutContractTypeInput {

    @Field(() => ContractScalarWhereInput, {nullable:false})
    where!: ContractScalarWhereInput;

    @Field(() => ContractUpdateManyMutationInput, {nullable:false})
    data!: ContractUpdateManyMutationInput;
}
