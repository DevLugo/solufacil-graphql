import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerUpdateWithoutContractInput } from './employer-update-without-contract.input';
import { EmployerCreateWithoutContractInput } from './employer-create-without-contract.input';

@InputType()
export class EmployerUpsertWithoutContractInput {

    @Field(() => EmployerUpdateWithoutContractInput, {nullable:false})
    update!: EmployerUpdateWithoutContractInput;

    @Field(() => EmployerCreateWithoutContractInput, {nullable:false})
    create!: EmployerCreateWithoutContractInput;
}
