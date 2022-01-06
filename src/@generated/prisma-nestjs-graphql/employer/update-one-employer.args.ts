import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerUpdateInput } from './employer-update.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';

@ArgsType()
export class UpdateOneEmployerArgs {

    @Field(() => EmployerUpdateInput, {nullable:false})
    data!: EmployerUpdateInput;

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;
}
