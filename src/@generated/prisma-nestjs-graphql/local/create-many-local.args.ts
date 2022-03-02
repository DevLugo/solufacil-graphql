import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalCreateManyInput } from './local-create-many.input';

@ArgsType()
export class CreateManyLocalArgs {

    @Field(() => [LocalCreateManyInput], {nullable:false})
    data!: Array<LocalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
