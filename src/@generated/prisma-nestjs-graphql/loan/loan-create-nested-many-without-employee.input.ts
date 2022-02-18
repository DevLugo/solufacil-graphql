import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutEmployeeInput } from './loan-create-without-employee.input';
import { LoanCreateOrConnectWithoutEmployeeInput } from './loan-create-or-connect-without-employee.input';
import { LoanCreateManyEmployeeInputEnvelope } from './loan-create-many-employee-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@InputType()
export class LoanCreateNestedManyWithoutEmployeeInput {

    @Field(() => [LoanCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<LoanCreateWithoutEmployeeInput>;

    @Field(() => [LoanCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<LoanCreateOrConnectWithoutEmployeeInput>;

    @Field(() => LoanCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: LoanCreateManyEmployeeInputEnvelope;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    connect?: Array<LoanWhereUniqueInput>;
}
