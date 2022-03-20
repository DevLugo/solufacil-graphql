import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutContractsInput } from '../employee/employee-create-nested-one-without-contracts.input';
import { DocumentCreateNestedManyWithoutContractInput } from '../document/document-create-nested-many-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';
import { ContractTypeCreateNestedOneWithoutContractInput } from '../contract-type/contract-type-create-nested-one-without-contract.input';

@InputType()
export class ContractCreateWithoutBorrowerInput {

    @HideField()
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutContractsInput, {nullable:true})
    employee?: EmployeeCreateNestedOneWithoutContractsInput;

    @Field(() => DocumentCreateNestedManyWithoutContractInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutContractInput;

    @HideField()
    loans?: LoanCreateNestedManyWithoutContractInput;

    @Field(() => ContractTypeCreateNestedOneWithoutContractInput, {nullable:false})
    contractType!: ContractTypeCreateNestedOneWithoutContractInput;
}
