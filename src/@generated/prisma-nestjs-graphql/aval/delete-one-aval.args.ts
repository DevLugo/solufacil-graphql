import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalWhereUniqueInput } from './aval-where-unique.input';

@ArgsType()
export class DeleteOneAvalArgs {

    @Field(() => AvalWhereUniqueInput, {nullable:false})
    where!: AvalWhereUniqueInput;
}
