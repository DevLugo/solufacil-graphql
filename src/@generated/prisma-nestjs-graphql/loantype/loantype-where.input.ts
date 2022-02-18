import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LoanListRelationFilter } from '../loan/loan-list-relation-filter.input';

@InputType()
export class LoantypeWhereInput {

    @Field(() => [LoantypeWhereInput], {nullable:true})
    AND?: Array<LoantypeWhereInput>;

    @Field(() => [LoantypeWhereInput], {nullable:true})
    OR?: Array<LoantypeWhereInput>;

    @Field(() => [LoantypeWhereInput], {nullable:true})
    NOT?: Array<LoantypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    weekDuration?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    rate?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    overdueRate?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => LoanListRelationFilter, {nullable:true})
    Loan?: LoanListRelationFilter;
}
