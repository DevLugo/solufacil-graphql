import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutContractInput } from './employee-update-without-contract.input';
import { EmployeeCreateWithoutContractInput } from './employee-create-without-contract.input';

@InputType()
export class EmployeeUpsertWithoutContractInput {

    @Field(() => EmployeeUpdateWithoutContractInput, {nullable:false})
    update!: EmployeeUpdateWithoutContractInput;

    @Field(() => EmployeeCreateWithoutContractInput, {nullable:false})
    create!: EmployeeCreateWithoutContractInput;
}
