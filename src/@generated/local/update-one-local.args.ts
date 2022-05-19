import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalUpdateInput } from './local-update.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';

@ArgsType()
export class UpdateOneLocalArgs {

    @Field(() => LocalUpdateInput, {nullable:false})
    data!: LocalUpdateInput;

    @Field(() => LocalWhereUniqueInput, {nullable:false})
    where!: LocalWhereUniqueInput;
}
