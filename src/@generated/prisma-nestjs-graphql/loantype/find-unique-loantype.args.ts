import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';

@ArgsType()
export class FindUniqueLoantypeArgs {

    @Field(() => LoantypeWhereUniqueInput, {nullable:false})
    where!: LoantypeWhereUniqueInput;
}
