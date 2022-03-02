import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalCreateInput } from './local-create.input';

@ArgsType()
export class CreateOneLocalArgs {

    @Field(() => LocalCreateInput, {nullable:false})
    data!: LocalCreateInput;
}
