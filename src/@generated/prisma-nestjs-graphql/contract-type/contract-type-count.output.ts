import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContractTypeCount {

    @Field(() => Int, {nullable:false})
    contract!: number;
}
