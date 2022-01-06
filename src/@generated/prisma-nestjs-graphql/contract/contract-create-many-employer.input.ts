import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ContractCreateManyEmployerInput {

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
}
