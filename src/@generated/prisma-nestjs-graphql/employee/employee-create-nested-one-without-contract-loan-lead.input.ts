import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractLoanLeadInput } from './employee-create-without-contract-loan-lead.input';
import { EmployeeCreateOrConnectWithoutContractLoanLeadInput } from './employee-create-or-connect-without-contract-loan-lead.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutContractLoanLeadInput {

    @Field(() => EmployeeCreateWithoutContractLoanLeadInput, {nullable:true})
    create?: EmployeeCreateWithoutContractLoanLeadInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractLoanLeadInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractLoanLeadInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
