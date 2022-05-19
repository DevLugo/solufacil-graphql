import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeUpdateManyMutationInput } from './loantype-update-many-mutation.input';
import { LoantypeWhereInput } from './loantype-where.input';

@ArgsType()
export class UpdateManyLoantypeArgs {

    @Field(() => LoantypeUpdateManyMutationInput, {nullable:false})
    data!: LoantypeUpdateManyMutationInput;

    @Field(() => LoantypeWhereInput, {nullable:true})
    where?: LoantypeWhereInput;
}
