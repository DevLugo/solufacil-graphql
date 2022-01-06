import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ContractTypeWhereInput {

    @Field(() => [ContractTypeWhereInput], {nullable:true})
    AND?: Array<ContractTypeWhereInput>;

    @Field(() => [ContractTypeWhereInput], {nullable:true})
    OR?: Array<ContractTypeWhereInput>;

    @Field(() => [ContractTypeWhereInput], {nullable:true})
    NOT?: Array<ContractTypeWhereInput>;

    @HideField()
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    weekDuration?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    rate?: FloatFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
