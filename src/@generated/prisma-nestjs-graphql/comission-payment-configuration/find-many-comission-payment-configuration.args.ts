import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';
import { ComissionPaymentConfigurationOrderByWithRelationInput } from './comission-payment-configuration-order-by-with-relation.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComissionPaymentConfigurationScalarFieldEnum } from './comission-payment-configuration-scalar-field.enum';

@ArgsType()
export class FindManyComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    where?: ComissionPaymentConfigurationWhereInput;

    @Field(() => [ComissionPaymentConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComissionPaymentConfigurationOrderByWithRelationInput>;

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:true})
    cursor?: ComissionPaymentConfigurationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComissionPaymentConfigurationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComissionPaymentConfigurationScalarFieldEnum>;
}
