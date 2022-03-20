import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { BorrowerCreateNestedOneWithoutContractInput } from '../borrower/borrower-create-nested-one-without-contract.input';
import { DocumentCreateNestedManyWithoutContractInput } from '../document/document-create-nested-many-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';
import { ContractTypeCreateNestedOneWithoutContractInput } from '../contract-type/contract-type-create-nested-one-without-contract.input';

@InputType()
export class ContractCreateWithoutEmployeeInput {

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

    @Field(() => BorrowerCreateNestedOneWithoutContractInput, {nullable:false})
    borrower!: BorrowerCreateNestedOneWithoutContractInput;

    @Field(() => DocumentCreateNestedManyWithoutContractInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutContractInput;

    @HideField()
    loans?: LoanCreateNestedManyWithoutContractInput;

    @Field(() => ContractTypeCreateNestedOneWithoutContractInput, {nullable:false})
    contractType!: ContractTypeCreateNestedOneWithoutContractInput;
}
