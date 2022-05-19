import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SystemSectionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
