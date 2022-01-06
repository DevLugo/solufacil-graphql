import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CustomerWhereInput {

    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logo?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
