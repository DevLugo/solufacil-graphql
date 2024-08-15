import { InputType, Field } from '@nestjs/graphql';
import { IsUUID, IsDecimal, isBoolean, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class TransferMoneyInput {
  @Field()
  @IsUUID()
  @IsOptional()
  fromId?: string;

  @Field()
  @IsUUID()
  toId: string;

  @Field()
  @IsDecimal()
  amount: number;

  @Field()
  @IsUUID()
  approverId: string;

  @Field()
  @IsBoolean()
  isInvestment?: boolean;
}

@InputType()
export class ApproveRejectTransactionInput{
  @Field()
  @IsUUID()
  transactionRqId: string;

  @Field()
  @IsUUID()
  approverId: string;

  @Field()
  isApproved: boolean;
}