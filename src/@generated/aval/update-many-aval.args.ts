import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalUpdateManyMutationInput } from './aval-update-many-mutation.input';
import { AvalWhereInput } from './aval-where.input';

@ArgsType()
export class UpdateManyAvalArgs {

    @Field(() => AvalUpdateManyMutationInput, {nullable:false})
    data!: AvalUpdateManyMutationInput;

    @Field(() => AvalWhereInput, {nullable:true})
    where?: AvalWhereInput;
}
