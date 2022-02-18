import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeWhereInput } from './loantype-where.input';

@InputType()
export class LoantypeRelationFilter {

    @Field(() => LoantypeWhereInput, {nullable:true})
    is?: LoantypeWhereInput;

    @Field(() => LoantypeWhereInput, {nullable:true})
    isNot?: LoantypeWhereInput;
}
