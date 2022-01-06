import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Prisma } from '@prisma/client';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
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
    amount?: Prisma.Decimal;

    @Field(() => StringNullableFilter, {nullable:true})
    borrowerId?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    employeeId?: StringNullableFilter;
}
