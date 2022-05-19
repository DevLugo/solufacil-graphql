import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalCreateInput } from './aval-create.input';

@ArgsType()
export class CreateOneAvalArgs {

    @Field(() => AvalCreateInput, {nullable:false})
    data!: AvalCreateInput;
}
