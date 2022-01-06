import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalUpdateInput } from './aval-update.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';

@ArgsType()
export class UpdateOneAvalArgs {

    @Field(() => AvalUpdateInput, {nullable:false})
    data!: AvalUpdateInput;

    @Field(() => AvalWhereUniqueInput, {nullable:false})
    where!: AvalWhereUniqueInput;
}
