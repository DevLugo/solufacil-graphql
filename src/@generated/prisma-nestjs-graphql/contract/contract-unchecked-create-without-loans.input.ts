import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';
import { DocumentUncheckedCreateNestedManyWithoutContractInput } from '../document/document-unchecked-create-nested-many-without-contract.input';

@InputType()
export class ContractUncheckedCreateWithoutLoansInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Prisma.Decimal;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    employeeId?: string;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutContractInput, {nullable:true})
    Documents?: DocumentUncheckedCreateNestedManyWithoutContractInput;
}
