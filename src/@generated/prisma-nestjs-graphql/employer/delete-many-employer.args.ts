import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerWhereInput } from './employer-where.input';

@ArgsType()
export class DeleteManyEmployerArgs {

    @Field(() => EmployerWhereInput, {nullable:true})
    where?: EmployerWhereInput;
}
