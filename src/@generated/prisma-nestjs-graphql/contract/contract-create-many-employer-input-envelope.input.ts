import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateManyEmployerInput } from './contract-create-many-employer.input';

@InputType()
export class ContractCreateManyEmployerInputEnvelope {

    @Field(() => [ContractCreateManyEmployerInput], {nullable:false})
    data!: Array<ContractCreateManyEmployerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
