import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalWhereUniqueInput } from './local-where-unique.input';

@ArgsType()
export class FindUniqueLocalArgs {

    @Field(() => LocalWhereUniqueInput, {nullable:false})
    where!: LocalWhereUniqueInput;
}
