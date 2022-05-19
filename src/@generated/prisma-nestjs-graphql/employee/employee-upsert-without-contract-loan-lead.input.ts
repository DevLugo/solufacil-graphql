import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutContractLoanLeadInput } from './employee-update-without-contract-loan-lead.input';
import { EmployeeCreateWithoutContractLoanLeadInput } from './employee-create-without-contract-loan-lead.input';

@InputType()
export class EmployeeUpsertWithoutContractLoanLeadInput {

    @Field(() => EmployeeUpdateWithoutContractLoanLeadInput, {nullable:false})
    update!: EmployeeUpdateWithoutContractLoanLeadInput;

    @Field(() => EmployeeCreateWithoutContractLoanLeadInput, {nullable:false})
    create!: EmployeeCreateWithoutContractLoanLeadInput;
}
