import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateManyEmployeeInput } from './contract-create-many-employee.input';

@InputType()
export class ContractCreateManyEmployeeInputEnvelope {

    @Field(() => [ContractCreateManyEmployeeInput], {nullable:false})
    data!: Array<ContractCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
