import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractTypeMaxAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    monthDuration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
