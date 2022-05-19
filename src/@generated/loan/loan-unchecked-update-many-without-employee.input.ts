import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutEmployeeInput } from './loan-create-without-employee.input';
import { LoanCreateOrConnectWithoutEmployeeInput } from './loan-create-or-connect-without-employee.input';
import { LoanUpsertWithWhereUniqueWithoutEmployeeInput } from './loan-upsert-with-where-unique-without-employee.input';
import { LoanCreateManyEmployeeInputEnvelope } from './loan-create-many-employee-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithWhereUniqueWithoutEmployeeInput } from './loan-update-with-where-unique-without-employee.input';
import { LoanUpdateManyWithWhereWithoutEmployeeInput } from './loan-update-many-with-where-without-employee.input';
import { LoanScalarWhereInput } from './loan-scalar-where.input';

@InputType()
export class LoanUncheckedUpdateManyWithoutEmployeeInput {

    @Field(() => [LoanCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<LoanCreateWithoutEmployeeInput>;

    @Field(() => [LoanCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<LoanCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [LoanUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<LoanUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => LoanCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: LoanCreateManyEmployeeInputEnvelope;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    set?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    delete?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    connect?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<LoanUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [LoanUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<LoanUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [LoanScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanScalarWhereInput>;
}
