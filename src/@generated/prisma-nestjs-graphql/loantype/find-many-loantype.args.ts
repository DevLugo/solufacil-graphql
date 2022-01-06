import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeWhereInput } from './loantype-where.input';
import { LoantypeOrderByWithRelationInput } from './loantype-order-by-with-relation.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoantypeScalarFieldEnum } from './loantype-scalar-field.enum';

@ArgsType()
export class FindManyLoantypeArgs {

    @Field(() => LoantypeWhereInput, {nullable:true})
    where?: LoantypeWhereInput;

    @Field(() => [LoantypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoantypeOrderByWithRelationInput>;

    @Field(() => LoantypeWhereUniqueInput, {nullable:true})
    cursor?: LoantypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LoantypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoantypeScalarFieldEnum>;
}
