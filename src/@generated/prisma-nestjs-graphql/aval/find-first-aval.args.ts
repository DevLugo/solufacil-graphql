import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalWhereInput } from './aval-where.input';
import { AvalOrderByWithRelationInput } from './aval-order-by-with-relation.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvalScalarFieldEnum } from './aval-scalar-field.enum';

@ArgsType()
export class FindFirstAvalArgs {

    @Field(() => AvalWhereInput, {nullable:true})
    where?: AvalWhereInput;

    @Field(() => [AvalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvalOrderByWithRelationInput>;

    @Field(() => AvalWhereUniqueInput, {nullable:true})
    cursor?: AvalWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AvalScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AvalScalarFieldEnum>;
}
