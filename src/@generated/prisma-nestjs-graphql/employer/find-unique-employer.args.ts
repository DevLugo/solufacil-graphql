import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';

@ArgsType()
export class FindUniqueEmployerArgs {

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;
}
