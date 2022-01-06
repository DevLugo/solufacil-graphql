import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereInput } from './employer-where.input';
import { EmployerOrderByWithRelationInput } from './employer-order-by-with-relation.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployerScalarFieldEnum } from './employer-scalar-field.enum';

@ArgsType()
export class FindFirstEmployerArgs {

    @Field(() => EmployerWhereInput, {nullable:true})
    where?: EmployerWhereInput;

    @Field(() => [EmployerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployerOrderByWithRelationInput>;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    cursor?: EmployerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmployerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployerScalarFieldEnum>;
}
