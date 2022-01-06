import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutEmployerInput } from './contract-update-without-employer.input';
import { ContractCreateWithoutEmployerInput } from './contract-create-without-employer.input';

@InputType()
export class ContractUpsertWithWhereUniqueWithoutEmployerInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutEmployerInput, {nullable:false})
    update!: ContractUpdateWithoutEmployerInput;

    @Field(() => ContractCreateWithoutEmployerInput, {nullable:false})
    create!: ContractCreateWithoutEmployerInput;
}
