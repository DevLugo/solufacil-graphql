import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionWhereInput } from './system-section-where.input';
import { SystemSectionOrderByWithRelationInput } from './system-section-order-by-with-relation.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SystemSectionScalarFieldEnum } from './system-section-scalar-field.enum';

@ArgsType()
export class FindFirstSystemSectionArgs {

    @Field(() => SystemSectionWhereInput, {nullable:true})
    where?: SystemSectionWhereInput;

    @Field(() => [SystemSectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SystemSectionOrderByWithRelationInput>;

    @Field(() => SystemSectionWhereUniqueInput, {nullable:true})
    cursor?: SystemSectionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SystemSectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SystemSectionScalarFieldEnum>;
}
