import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesCreateWithoutUserInput } from './expenses-create-without-user.input';
import { ExpensesCreateOrConnectWithoutUserInput } from './expenses-create-or-connect-without-user.input';
import { ExpensesCreateManyUserInputEnvelope } from './expenses-create-many-user-input-envelope.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';

@InputType()
export class ExpensesUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ExpensesCreateWithoutUserInput], {nullable:true})
    create?: Array<ExpensesCreateWithoutUserInput>;

    @Field(() => [ExpensesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ExpensesCreateOrConnectWithoutUserInput>;

    @Field(() => ExpensesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ExpensesCreateManyUserInputEnvelope;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    connect?: Array<ExpensesWhereUniqueInput>;
}
