import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeCreateInput } from './loantype-create.input';

@ArgsType()
export class CreateOneLoantypeArgs {

    @Field(() => LoantypeCreateInput, {nullable:false})
    data!: LoantypeCreateInput;
}
