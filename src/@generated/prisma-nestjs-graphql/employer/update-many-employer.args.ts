import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerUpdateManyMutationInput } from './employer-update-many-mutation.input';
import { EmployerWhereInput } from './employer-where.input';

@ArgsType()
export class UpdateManyEmployerArgs {

    @Field(() => EmployerUpdateManyMutationInput, {nullable:false})
    data!: EmployerUpdateManyMutationInput;

    @Field(() => EmployerWhereInput, {nullable:true})
    where?: EmployerWhereInput;
}
