import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalCreateManyInput } from './aval-create-many.input';

@ArgsType()
export class CreateManyAvalArgs {

    @Field(() => [AvalCreateManyInput], {nullable:false})
    data!: Array<AvalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
