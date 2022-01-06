import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployerCreateManyInput } from './employer-create-many.input';

@ArgsType()
export class CreateManyEmployerArgs {

    @Field(() => [EmployerCreateManyInput], {nullable:false})
    data!: Array<EmployerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
