import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeCreateInput } from './loantype-create.input';
import { LoantypeUpdateInput } from './loantype-update.input';

@ArgsType()
export class UpsertOneLoantypeArgs {

    @Field(() => LoantypeWhereUniqueInput, {nullable:false})
    where!: LoantypeWhereUniqueInput;

    @Field(() => LoantypeCreateInput, {nullable:false})
    create!: LoantypeCreateInput;

    @Field(() => LoantypeUpdateInput, {nullable:false})
    update!: LoantypeUpdateInput;
}
