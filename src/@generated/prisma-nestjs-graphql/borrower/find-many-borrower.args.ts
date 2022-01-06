import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerWhereInput } from './borrower-where.input';
import { BorrowerOrderByWithRelationInput } from './borrower-order-by-with-relation.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BorrowerScalarFieldEnum } from './borrower-scalar-field.enum';

@ArgsType()
export class FindManyBorrowerArgs {

    @Field(() => BorrowerWhereInput, {nullable:true})
    where?: BorrowerWhereInput;

    @Field(() => [BorrowerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BorrowerOrderByWithRelationInput>;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    cursor?: BorrowerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BorrowerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BorrowerScalarFieldEnum>;
}
