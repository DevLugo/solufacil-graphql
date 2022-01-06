import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerWhereInput } from './employer-where.input';

@InputType()
export class EmployerRelationFilter {

    @Field(() => EmployerWhereInput, {nullable:true})
    is?: EmployerWhereInput;

    @Field(() => EmployerWhereInput, {nullable:true})
    isNot?: EmployerWhereInput;
}
