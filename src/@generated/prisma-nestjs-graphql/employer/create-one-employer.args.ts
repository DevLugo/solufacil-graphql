import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerCreateInput } from './employer-create.input';

@ArgsType()
export class CreateOneEmployerArgs {

    @Field(() => EmployerCreateInput, {nullable:false})
    data!: EmployerCreateInput;
}
