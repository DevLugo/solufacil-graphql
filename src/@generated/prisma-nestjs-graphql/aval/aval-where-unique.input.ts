import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AvalWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;
}
