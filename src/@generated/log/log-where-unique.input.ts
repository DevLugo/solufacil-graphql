import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
