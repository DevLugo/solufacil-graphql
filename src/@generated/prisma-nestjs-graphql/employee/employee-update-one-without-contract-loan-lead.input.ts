import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractLoanLeadInput } from './employee-create-without-contract-loan-lead.input';
import { EmployeeCreateOrConnectWithoutContractLoanLeadInput } from './employee-create-or-connect-without-contract-loan-lead.input';
import { EmployeeUpsertWithoutContractLoanLeadInput } from './employee-upsert-without-contract-loan-lead.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutContractLoanLeadInput } from './employee-update-without-contract-loan-lead.input';

@InputType()
export class EmployeeUpdateOneWithoutContractLoanLeadInput {

    @Field(() => EmployeeCreateWithoutContractLoanLeadInput, {nullable:true})
    create?: EmployeeCreateWithoutContractLoanLeadInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractLoanLeadInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractLoanLeadInput;

    @Field(() => EmployeeUpsertWithoutContractLoanLeadInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutContractLoanLeadInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutContractLoanLeadInput, {nullable:true})
    update?: EmployeeUpdateWithoutContractLoanLeadInput;
}
