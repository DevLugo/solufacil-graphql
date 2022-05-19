import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalWhereInput } from './local-where.input';

@InputType()
export class LocalListRelationFilter {

    @Field(() => LocalWhereInput, {nullable:true})
    every?: LocalWhereInput;

    @Field(() => LocalWhereInput, {nullable:true})
    some?: LocalWhereInput;

    @Field(() => LocalWhereInput, {nullable:true})
    none?: LocalWhereInput;
}
