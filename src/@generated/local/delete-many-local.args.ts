import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalWhereInput } from './local-where.input';

@ArgsType()
export class DeleteManyLocalArgs {

    @Field(() => LocalWhereInput, {nullable:true})
    where?: LocalWhereInput;
}
