import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerCreateWithoutContractInput } from './employer-create-without-contract.input';

@InputType()
export class EmployerCreateOrConnectWithoutContractInput {

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;

    @Field(() => EmployerCreateWithoutContractInput, {nullable:false})
    create!: EmployerCreateWithoutContractInput;
}
