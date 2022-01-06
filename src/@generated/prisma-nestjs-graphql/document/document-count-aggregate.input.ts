import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DocumentCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    borrowerId?: true;

    @Field(() => Boolean, {nullable:true})
    avalId?: true;

    @Field(() => Boolean, {nullable:true})
    contractId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
