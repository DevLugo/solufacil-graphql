import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalWhereInput } from './local-where.input';
import { LocalOrderByWithRelationInput } from './local-order-by-with-relation.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocalScalarFieldEnum } from './local-scalar-field.enum';

@ArgsType()
export class FindFirstLocalArgs {

    @Field(() => LocalWhereInput, {nullable:true})
    where?: LocalWhereInput;

    @Field(() => [LocalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocalOrderByWithRelationInput>;

    @Field(() => LocalWhereUniqueInput, {nullable:true})
    cursor?: LocalWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocalScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocalScalarFieldEnum>;
}
