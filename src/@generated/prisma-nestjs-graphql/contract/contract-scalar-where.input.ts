import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractScalarWhereInput {

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    AND?: Array<ContractScalarWhereInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    OR?: Array<ContractScalarWhereInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    NOT?: Array<ContractScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    borrowerId?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    signDate?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;
}
