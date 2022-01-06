import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { DocumentUncheckedCreateNestedManyWithoutContractInput } from '../document/document-unchecked-create-nested-many-without-contract.input';
import { LoanUncheckedCreateNestedManyWithoutContractInput } from '../loan/loan-unchecked-create-nested-many-without-contract.input';

@InputType()
export class ContractUncheckedCreateWithoutEmployerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutContractInput, {nullable:true})
    Documents?: DocumentUncheckedCreateNestedManyWithoutContractInput;

    @Field(() => LoanUncheckedCreateNestedManyWithoutContractInput, {nullable:true})
    Loans?: LoanUncheckedCreateNestedManyWithoutContractInput;
}
