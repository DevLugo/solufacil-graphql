import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractCreateManyInput } from './contract-create-many.input';

@ArgsType()
export class CreateManyContractArgs {

    @Field(() => [ContractCreateManyInput], {nullable:false})
    data!: Array<ContractCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
