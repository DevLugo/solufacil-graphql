import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractCreateManyEmployeeInput {

    @HideField()
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
    contractTypeId!: string;

    @Field(() => String, {nullable:false})
    loanLeadId!: string;
}
