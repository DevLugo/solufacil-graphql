import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneWhereInput } from './phone-where.input';

@InputType()
export class PhoneListRelationFilter {

    @Field(() => PhoneWhereInput, {nullable:true})
    every?: PhoneWhereInput;

    @Field(() => PhoneWhereInput, {nullable:true})
    some?: PhoneWhereInput;

    @Field(() => PhoneWhereInput, {nullable:true})
    none?: PhoneWhereInput;
}
