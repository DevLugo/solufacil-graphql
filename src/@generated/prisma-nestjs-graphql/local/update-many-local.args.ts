import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalUpdateManyMutationInput } from './local-update-many-mutation.input';
import { LocalWhereInput } from './local-where.input';

@ArgsType()
export class UpdateManyLocalArgs {

    @Field(() => LocalUpdateManyMutationInput, {nullable:false})
    data!: LocalUpdateManyMutationInput;

    @Field(() => LocalWhereInput, {nullable:true})
    where?: LocalWhereInput;
}
