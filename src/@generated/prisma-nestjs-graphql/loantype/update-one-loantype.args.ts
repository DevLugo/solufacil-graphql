import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeUpdateInput } from './loantype-update.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';

@ArgsType()
export class UpdateOneLoantypeArgs {

    @Field(() => LoantypeUpdateInput, {nullable:false})
    data!: LoantypeUpdateInput;

    @Field(() => LoantypeWhereUniqueInput, {nullable:false})
    where!: LoantypeWhereUniqueInput;
}
