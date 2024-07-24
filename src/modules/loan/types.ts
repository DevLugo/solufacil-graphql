import { Field, InputType, registerEnumType, Directive } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from "@prisma/client/runtime/library";
import { Employee, LoanState, PersonalData, User } from '@prisma/client';
import { PaymentSchedule } from '../payment-schedule/types';
import { LoanType } from '../loan-types/types';
import { GraphQLDate } from 'graphql-scalars';
import { CreatePersonalDataInput } from '../personal-data/types';
import { IsDate, IsPhoneNumber, IsNotEmpty, ValidateNested, MinLength, ValidateIf, IsBoolean, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { BorrowerCreateInput } from '../borrower/types';
import * as Validator from 'class-validator';

@InputType()
export class TestInput {

   /*  @Field(() => Boolean, { nullable: false })
    @Validator.IsBoolean()
    nameIsRequired!: boolean;

    @Field(() => String, { nullable: true })
    @Validator.ValidateIf((object, value) => object.nameIsRequired === true)
    @Validator.MinLength(3)
    name?: string; */

    @Field(() => Boolean, { nullable: false })
    @Validator.IsBoolean()
    isRenovation!: boolean;

    @Field(() => String, { nullable: true })
    @Validator.ValidateIf((object, value) => {
        console.log("///////////",value)
        return object.isRenovation === true
    })
    @Validator.IsNotEmpty()
    @Validator.MinLength(1)
    borrowerId?: string;
    
    @Field(() => BorrowerCreateInput)
    @Validator.IsDefined()
    @Validator.ValidateNested()
    borrower: BorrowerCreateInput
}

registerEnumType(LoanState, {
    name: 'LoanState',
});

@ObjectType()
export class Loan {

    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => LoanState, { nullable: false })
    status!: LoanState;

    @Field(() => GraphQLDecimal, { nullable: false })
    weeklyPaymentAmount!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    previousAmountGived!: Decimal | null;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    amountGived!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    amountToPay!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    paidAmount!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    pendingAmount!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    renovationProfitAmount!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    renovationPendingAmount!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    baseProfitAmount!: Decimal;

    @Field(() => GraphQLDecimal, { nullable: false, defaultValue: 0 })
    totalProfitAmount!: Decimal;

    @Field(() => ID, { nullable: false })
    loanTypeId!: string;

    @Field(() => Date, { nullable: false })
    signDate!: Date;

    @Field(() => Date, { nullable: true })
    finishedDate!: Date | null;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;

    @Field(() => Date, { nullable: false })
    updatedAt!: Date;

    @Field(() => String, { nullable: false })
    contractId!: string;

    @Field(() => String, { nullable: false })
    grantorId!: string;

    @Field(() => String, { nullable: true })
    renovatedFromId!: string | null;
}

export class AvalsCreateInput {
    @Field(() => String, { nullable: true })
    avalId?: string;

    @Field(() => CreatePersonalDataInput, { nullable: true })
    newAval?: CreatePersonalDataInput;
}

@InputType()
export class LoanCreateInput {
    @Field(() => GraphQLDate, { nullable: false })
    firstPaymentDate: Date | string;
   
    @IsBoolean()
    @Field(() => Boolean)
    isRenovation: boolean;

    @Field(() => String,  {nullable: true})
    borrowerId?: string;

    @Field(() => BorrowerCreateInput, {nullable: true})
    borrower?: BorrowerCreateInput
    
    @Field(() => [CreatePersonalDataInput], {nullable: true})
    avals: AvalsCreateInput[]
 
    @Field(() => String, {nullable:false})
    loanLeadId:string
    
    @Validator.IsNumber()
    @Field(() => Number, { nullable: false })
    amountGived: number;

    @Field(() => String, {nullable:false})
    loanTypeId: string;

    @Field(() => GraphQLDate, {nullable:true})
    signDate: Date | string;
}

@InputType()
export class CreateAvalInput {
    @Field(() => String, { nullable: true })
    avalId?: string;

    @Field(() => CreatePersonalDataInput, { nullable: true })
    newAval?: CreatePersonalDataInput;
}

@InputType()
export class CreateBorrowerInput {
    @Field(() => String, { nullable: true })
    borrowerId?: string;

    @Field(() => CreatePersonalDataInput, { nullable: true })
    Newborrower?: CreateBorrowerInput;
}

@InputType()
export class CreateLoansProcess extends LoanCreateInput {
    @Field(() => String, { nullable: false })
    contractId!: string;
    @Field(() => String, { nullable: false })
    grantorId!: string;
}

export type LoanWithAdditionalData = Loan & {
    grantor: Employee & {
        user: User;
    };
    paymentSchedule: PaymentSchedule[];
};

@InputType()
export class LoanByBorrowerWhereUniqueInput {
    @Field()
    borrowerId: string;
}