import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhoneWhereInput } from './phone-where.input';
import { PhoneOrderByWithRelationInput } from './phone-order-by-with-relation.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PhoneScalarFieldEnum } from './phone-scalar-field.enum';

@ArgsType()
export class FindManyPhoneArgs {

    @Field(() => PhoneWhereInput, {nullable:true})
    where?: PhoneWhereInput;

    @Field(() => [PhoneOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PhoneOrderByWithRelationInput>;

    @Field(() => PhoneWhereUniqueInput, {nullable:true})
    cursor?: PhoneWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PhoneScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PhoneScalarFieldEnum>;
}
