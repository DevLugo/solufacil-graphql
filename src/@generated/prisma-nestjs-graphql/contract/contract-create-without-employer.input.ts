import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BorrowerCreateNestedOneWithoutContractInput } from '../borrower/borrower-create-nested-one-without-contract.input';
import { DocumentCreateNestedManyWithoutContractInput } from '../document/document-create-nested-many-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';

@InputType()
export class ContractCreateWithoutEmployerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BorrowerCreateNestedOneWithoutContractInput, {nullable:true})
    Borrower?: BorrowerCreateNestedOneWithoutContractInput;

    @Field(() => DocumentCreateNestedManyWithoutContractInput, {nullable:true})
    Documents?: DocumentCreateNestedManyWithoutContractInput;

    @Field(() => LoanCreateNestedManyWithoutContractInput, {nullable:true})
    Loans?: LoanCreateNestedManyWithoutContractInput;
}
