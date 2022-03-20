import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { DocumentUncheckedCreateNestedManyWithoutContractInput } from '../document/document-unchecked-create-nested-many-without-contract.input';
import { LoanUncheckedCreateNestedManyWithoutContractInput } from '../loan/loan-unchecked-create-nested-many-without-contract.input';

@InputType()
export class ContractUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    borrowerId!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => String, {nullable:false})
    contractTypeId!: string;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutContractInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutContractInput;

    @HideField()
    loans?: LoanUncheckedCreateNestedManyWithoutContractInput;
}
