import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';

@ArgsType()
export class DeleteOneEmployerArgs {

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;
}
