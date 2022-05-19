import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeCreateManyInput } from './loantype-create-many.input';

@ArgsType()
export class CreateManyLoantypeArgs {

    @Field(() => [LoantypeCreateManyInput], {nullable:false})
    data!: Array<LoantypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
