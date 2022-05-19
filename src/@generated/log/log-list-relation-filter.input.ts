import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';

@InputType()
export class LogListRelationFilter {

    @Field(() => LogWhereInput, {nullable:true})
    every?: LogWhereInput;

    @Field(() => LogWhereInput, {nullable:true})
    some?: LogWhereInput;

    @Field(() => LogWhereInput, {nullable:true})
    none?: LogWhereInput;
}
