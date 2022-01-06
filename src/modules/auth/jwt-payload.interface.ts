import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class IJwtPayload {
    @Field(() => String, {nullable:false})
    id: string;

    @Field(() => String, {nullable:false})
    email: string;
    
    @Field(() => String, {nullable:false})
    iat?: Date;
}