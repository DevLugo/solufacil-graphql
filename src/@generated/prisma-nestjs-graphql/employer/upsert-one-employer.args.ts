import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerCreateInput } from './employer-create.input';
import { EmployerUpdateInput } from './employer-update.input';

@ArgsType()
export class UpsertOneEmployerArgs {

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;

    @Field(() => EmployerCreateInput, {nullable:false})
    create!: EmployerCreateInput;

    @Field(() => EmployerUpdateInput, {nullable:false})
    update!: EmployerUpdateInput;
}
