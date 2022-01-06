import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalWhereInput } from './aval-where.input';

@ArgsType()
export class DeleteManyAvalArgs {

    @Field(() => AvalWhereInput, {nullable:true})
    where?: AvalWhereInput;
}
