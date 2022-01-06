import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BorrowerCreateNestedOneWithoutContractInput } from '../borrower/borrower-create-nested-one-without-contract.input';
import { EmployeeCreateNestedOneWithoutContractInput } from '../employee/employee-create-nested-one-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';

@InputType()
export class ContractCreateWithoutDocumentsInput {

    @HideField()
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Prisma.Decimal;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => BorrowerCreateNestedOneWithoutContractInput, {nullable:true})
    Borrower?: BorrowerCreateNestedOneWithoutContractInput;

    @Field(() => EmployeeCreateNestedOneWithoutContractInput, {nullable:true})
    Employee?: EmployeeCreateNestedOneWithoutContractInput;

    @Field(() => LoanCreateNestedManyWithoutContractInput, {nullable:true})
    Loans?: LoanCreateNestedManyWithoutContractInput;
}
