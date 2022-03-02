import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalCreateInput } from './local-create.input';
import { LocalUpdateInput } from './local-update.input';

@ArgsType()
export class UpsertOneLocalArgs {

    @Field(() => LocalWhereUniqueInput, {nullable:false})
    where!: LocalWhereUniqueInput;

    @Field(() => LocalCreateInput, {nullable:false})
    create!: LocalCreateInput;

    @Field(() => LocalUpdateInput, {nullable:false})
    update!: LocalUpdateInput;
}
