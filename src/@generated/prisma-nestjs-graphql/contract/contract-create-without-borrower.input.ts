import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { EmployeeCreateNestedOneWithoutContractInput } from '../employee/employee-create-nested-one-without-contract.input';
import { DocumentCreateNestedManyWithoutContractInput } from '../document/document-create-nested-many-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';

@InputType()
export class ContractCreateWithoutBorrowerInput {

    @HideField()
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Prisma.Decimal;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutContractInput, {nullable:true})
    Employee?: EmployeeCreateNestedOneWithoutContractInput;

    @Field(() => DocumentCreateNestedManyWithoutContractInput, {nullable:true})
    Documents?: DocumentCreateNestedManyWithoutContractInput;

    @Field(() => LoanCreateNestedManyWithoutContractInput, {nullable:true})
    Loans?: LoanCreateNestedManyWithoutContractInput;
}
