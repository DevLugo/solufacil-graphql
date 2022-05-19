import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCreateManyLoanTypeInput } from './comission-payment-configuration-create-many-loan-type.input';

@InputType()
export class ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope {

    @Field(() => [ComissionPaymentConfigurationCreateManyLoanTypeInput], {nullable:false})
    data!: Array<ComissionPaymentConfigurationCreateManyLoanTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
