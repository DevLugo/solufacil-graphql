import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsUUID, IsDecimal, isBoolean, IsBoolean, IsOptional } from 'class-validator';
import { Decimal } from "@prisma/client/runtime/library";
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Employee } from '../employee/types';

@InputType()
export class TransferMoneyInput {

  @Field()
  @IsUUID()
  destinationAccountId: string;

  @Field()
  amount: number;

  @IsOptional()
  @IsBoolean()
  isInvestment?: boolean;
}

@InputType()
export class ApproveRejectTransactionInput{
  @Field()
  @IsUUID()
  transactionRqId: string;

  @Field()
  isApproved: boolean;
}

@ObjectType()
export class TransactionT {
  @Field()
  id: string;

  @Field(() => GraphQLDecimal, { nullable: false })
  amount: Decimal;

  @Field()
  type: string;

  @Field()
  state: string;

  @Field(() => String, { nullable: true })
  incomeSource: string;

  @Field( () => Employee, { nullable: true })
  sourceEmployee: Employee;

  /* @Field()
  sourceAccount: string;

  

  @Field()
  destinationAccount: string;

  @Field()
  destinationEmployee: string; */
}

