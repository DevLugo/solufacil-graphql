import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutContractsInput } from './employee-update-without-contracts.input';
import { EmployeeCreateWithoutContractsInput } from './employee-create-without-contracts.input';

@InputType()
export class EmployeeUpsertWithoutContractsInput {

    @Field(() => EmployeeUpdateWithoutContractsInput, {nullable:false})
    update!: EmployeeUpdateWithoutContractsInput;

    @Field(() => EmployeeCreateWithoutContractsInput, {nullable:false})
    create!: EmployeeCreateWithoutContractsInput;
}
