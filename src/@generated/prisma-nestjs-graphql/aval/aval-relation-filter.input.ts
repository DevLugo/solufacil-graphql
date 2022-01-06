import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalWhereInput } from './aval-where.input';

@InputType()
export class AvalRelationFilter {

    @Field(() => AvalWhereInput, {nullable:true})
    is?: AvalWhereInput;

    @Field(() => AvalWhereInput, {nullable:true})
    isNot?: AvalWhereInput;
}
