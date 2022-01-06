import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeWhereInput } from './loantype-where.input';

@ArgsType()
export class DeleteManyLoantypeArgs {

    @Field(() => LoantypeWhereInput, {nullable:true})
    where?: LoantypeWhereInput;
}
