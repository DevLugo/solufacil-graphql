import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';
import { LogOrderByWithRelationInput } from './log-order-by-with-relation.input';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogScalarFieldEnum } from './log-scalar-field.enum';

@ArgsType()
export class FindFirstLogArgs {

    @Field(() => LogWhereInput, {nullable:true})
    where?: LogWhereInput;

    @Field(() => [LogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LogOrderByWithRelationInput>;

    @Field(() => LogWhereUniqueInput, {nullable:true})
    cursor?: LogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LogScalarFieldEnum>;
}
