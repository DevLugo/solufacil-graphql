import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalCreateInput } from './aval-create.input';
import { AvalUpdateInput } from './aval-update.input';

@ArgsType()
export class UpsertOneAvalArgs {

    @Field(() => AvalWhereUniqueInput, {nullable:false})
    where!: AvalWhereUniqueInput;

    @Field(() => AvalCreateInput, {nullable:false})
    create!: AvalCreateInput;

    @Field(() => AvalUpdateInput, {nullable:false})
    update!: AvalUpdateInput;
}
