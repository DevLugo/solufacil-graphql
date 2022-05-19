import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutContractLoanLeadInput } from './employee-create-without-contract-loan-lead.input';

@InputType()
export class EmployeeCreateOrConnectWithoutContractLoanLeadInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutContractLoanLeadInput, {nullable:false})
    create!: EmployeeCreateWithoutContractLoanLeadInput;
}
