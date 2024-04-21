import { Field, Float, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { EmployeesTypes } from "@prisma/client";

@ObjectType()
export class LoanType {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Float, {nullable:false})
    rate!: number;

    @Field(() => Int, {nullable:false})
    weeksToRenew!: number;

    @Field(() => Float, {nullable:false})
    overdueRate!: number;

    @Field(() => Float, {nullable:false,defaultValue:3000})
    initialAmount!: number;

    @Field(() => Float, {nullable:false,defaultValue:5000})
    maximunAmount!: number;

    @Field(() => Float, {nullable:false,defaultValue:500})
    amountToIncrease!: number;

    @Field(() => Int, {nullable:false,defaultValue:2})
    increaseEveryNLoans!: number;

    @Field(() => EmployeesTypes, {nullable:false,defaultValue:false})
    availableFor!: EmployeesTypes;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}


@InputType()
export class LoanTypeWhereInput {
    @Field(() => EmployeesTypes, {nullable:true})
    employeeType?: EmployeesTypes;
}