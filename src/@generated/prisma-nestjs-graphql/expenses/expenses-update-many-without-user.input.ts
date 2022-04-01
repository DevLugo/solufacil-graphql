import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesCreateWithoutUserInput } from './expenses-create-without-user.input';
import { ExpensesCreateOrConnectWithoutUserInput } from './expenses-create-or-connect-without-user.input';
import { ExpensesUpsertWithWhereUniqueWithoutUserInput } from './expenses-upsert-with-where-unique-without-user.input';
import { ExpensesCreateManyUserInputEnvelope } from './expenses-create-many-user-input-envelope.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithWhereUniqueWithoutUserInput } from './expenses-update-with-where-unique-without-user.input';
import { ExpensesUpdateManyWithWhereWithoutUserInput } from './expenses-update-many-with-where-without-user.input';
import { ExpensesScalarWhereInput } from './expenses-scalar-where.input';

@InputType()
export class ExpensesUpdateManyWithoutUserInput {

    @Field(() => [ExpensesCreateWithoutUserInput], {nullable:true})
    create?: Array<ExpensesCreateWithoutUserInput>;

    @Field(() => [ExpensesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ExpensesCreateOrConnectWithoutUserInput>;

    @Field(() => [ExpensesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ExpensesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ExpensesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ExpensesCreateManyUserInputEnvelope;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    set?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    disconnect?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    delete?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    connect?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ExpensesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ExpensesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ExpensesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ExpensesScalarWhereInput], {nullable:true})
    deleteMany?: Array<ExpensesScalarWhereInput>;
}
