import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeCreateManyInput } from './contract-type-create-many.input';

@ArgsType()
export class CreateManyContractTypeArgs {

    @Field(() => [ContractTypeCreateManyInput], {nullable:false})
    data!: Array<ContractTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
