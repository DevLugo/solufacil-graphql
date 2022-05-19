import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanUncheckedCreateNestedManyWithoutContractInput } from '../loan/loan-unchecked-create-nested-many-without-contract.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractUncheckedCreateWithoutDocumentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    borrowerId!: string;

    @HideField()
    loans?: LoanUncheckedCreateNestedManyWithoutContractInput;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    contractTypeId!: string;

    @Field(() => String, {nullable:false})
    loanLeadId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;
}
