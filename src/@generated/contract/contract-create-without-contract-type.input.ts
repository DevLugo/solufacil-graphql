import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { BorrowerCreateNestedOneWithoutContractInput } from '../borrower/borrower-create-nested-one-without-contract.input';
import { DocumentCreateNestedManyWithoutContractInput } from '../document/document-create-nested-many-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';
import { EmployeeCreateNestedOneWithoutContractLoanLeadInput } from '../employee/employee-create-nested-one-without-contract-loan-lead.input';
import { EmployeeCreateNestedOneWithoutContractEmployeeInput } from '../employee/employee-create-nested-one-without-contract-employee.input';

@InputType()
export class ContractCreateWithoutContractTypeInput {

    @HideField()
    id?: string;

    @Field(() => BorrowerCreateNestedOneWithoutContractInput, {nullable:false})
    borrower!: BorrowerCreateNestedOneWithoutContractInput;

    @Field(() => DocumentCreateNestedManyWithoutContractInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutContractInput;

    @HideField()
    loans?: LoanCreateNestedManyWithoutContractInput;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutContractLoanLeadInput, {nullable:true})
    loanLead?: EmployeeCreateNestedOneWithoutContractLoanLeadInput;

    @Field(() => EmployeeCreateNestedOneWithoutContractEmployeeInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutContractEmployeeInput;
}