import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereInput } from './loan-where.input';
import { LoanOrderByWithRelationInput } from './loan-order-by-with-relation.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoanScalarFieldEnum } from './loan-scalar-field.enum';

@ArgsType()
export class FindManyLoanArgs {

    @Field(() => LoanWhereInput, {nullable:true})
    where?: LoanWhereInput;

    @Field(() => [LoanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoanOrderByWithRelationInput>;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    cursor?: LoanWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LoanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoanScalarFieldEnum>;
}
