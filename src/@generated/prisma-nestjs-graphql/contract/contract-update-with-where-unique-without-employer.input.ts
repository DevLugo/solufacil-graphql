import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutEmployerInput } from './contract-update-without-employer.input';

@InputType()
export class ContractUpdateWithWhereUniqueWithoutEmployerInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutEmployerInput, {nullable:false})
    data!: ContractUpdateWithoutEmployerInput;
}
