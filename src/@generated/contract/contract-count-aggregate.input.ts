import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    borrowerId?: true;

    @HideField()
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @Field(() => Boolean, {nullable:true})
    signDate?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    contractTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    loanLeadId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
