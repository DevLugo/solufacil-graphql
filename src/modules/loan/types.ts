import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { Employee, LoanState, PersonalData, User } from '@prisma/client';
import { PaymentSchedule } from '../payment-schedule/types';
import { LoanType } from '../loan-types/types';
import { GraphQLDate } from 'graphql-scalars';
import { CreatePersonalDataInput } from '../personal-data/types';


registerEnumType(LoanState, {
    name: 'LoanState',
});

@ObjectType()
export class Loan {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LoanState, {nullable:false})
    status!: LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    previousAmountGived!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    amountGived!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    amountToPay!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    paidAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    pendingAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    renovationProfitAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    renovationPendingAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    baseProfitAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    totalProfitAmount!: Decimal;

    @Field(() => LoanType, {nullable:false})
    loanType?: LoanType;

    @Field(() => Date, {nullable:false})
    signDate!: Date;

    @Field(() => Date, {nullable:true})
    finishedDate!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    contractId!: string;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => String, {nullable:false})
    grantorId!: string;

    @Field(() => String, {nullable:true})
    renovatedFromId!: string | null;

}

@InputType()
export class LoanCreateInput {
    @Field(() => GraphQLDate, { nullable: false })
    firstPaymentDate?: Date | string;
    
    @Field(() => String, { nullable: true, description: "Previos loanId. This apply when is a renovation" })
    renovatedFromId?: string
    
    @Field(() => String, { nullable: false })
    borrowerId: string

    @Field(() => String, {nullable:false})
    loanLeadId:string
    
    @Field(() => GraphQLDecimal, {nullable:true})
    amountGived?: Decimal;

    @Field(() => String, {nullable:false})
    loanTypeId!: string;

    @Field(() => GraphQLDate, {nullable:true})
    signDate?: Date | string;

    @Field(() => String, {nullable:true  })
    grantorId?: string;
}

@InputType()
export class CreateAvalInput {
    @Field(() => String, {nullable:true  })
    avalId?: string;

    @Field(() => CreatePersonalDataInput, {nullable:true  })
    newAval?: CreatePersonalDataInput;
}

@InputType()
export class CreateLoansProcess extends LoanCreateInput {
    @Field(() => String, {nullable:false})
    contractId!: string;
}

export type LoanWithAdditionalData = Loan & {
    grantor: Employee & {
      user: User;
    };
    paymentSchedule: PaymentSchedule[];
  };