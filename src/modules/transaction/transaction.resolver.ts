import { Args, Mutation, Parent, ResolveField } from '@nestjs/graphql';
import { ApproveRejectTransactionInput, TransactionT, TransferMoneyInput } from './types';
import { TransactionService } from './transaction.service';
import { Prisma, Transaction, TransactionRequestState, TransactionType } from '@prisma/client';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CurrentUser } from '../auth/auth.decorator';
import { IJwtPayload } from '../auth/types';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { Employee } from '../employee/types';

@UseGuards(GqlAuthGuard)
@Resolver(TransactionT)
export class TransactionResolver {
    constructor(
        private readonly db: PrismaService,
        private readonly transactionService: TransactionService
    ) { }

    @Query(() => [TransactionT])
    async receivedTransferRequests(
        @CurrentUser() user: IJwtPayload,
    ): Promise<Transaction[]> {
        const requests = await this.db.transaction.findMany({
            where: {
                state: TransactionRequestState.PENDING,
                destinationAccount:{
                    managers: {
                        some: {
                            employee: { userId: user.id }
                        }
                    }
                }
            },
        });
        return requests;
    }

    @ResolveField(() => Employee)
    async sourceEmployee(
        @Parent() root: TransactionT,
        @CurrentUser() user: IJwtPayload,
    ): Promise<Employee> {
        //@ts-ignore
        console.log("---", root.sourceEmployeeId);
        const sourceEmployee = await this.db.employee.findFirst({
            where: {
                //@ts-ignore
                id: root.sourceEmployeeId,
            },
        });
        console.log(sourceEmployee);
        return sourceEmployee
    }
    @ResolveField(() => Employee)
    async destinationEmployee(
        @CurrentUser() user: IJwtPayload,
    ): Promise<Employee> {
        const destinationEmployee = await this.db.employee.findFirst({
            where: {
                userId: user.id,
            },
        });
        return destinationEmployee
    }


    @Mutation(() => Boolean)
    async transferMoney(
        @Args('transferMoneyInput') transferMoneyInput: TransferMoneyInput,
        @CurrentUser() user: IJwtPayload,
    ): Promise<boolean> {
        const { destinationAccountId, amount, isInvestment } = transferMoneyInput;
        const fromUserId = user.id;

        const sourceAccount = await this.db.account.findFirst({
            where: { managers: {
                some: {
                    employee: {
                        userId: fromUserId
                    }
                }
            } },
        });

        let isInvestmentDirector = false; // Check if the sender is an INVESTMENT_DIRECTOR
        if (isInvestment) {
            isInvestmentDirector = true;
            // Check if the sender is an INVESTMENT_DIRECTOR
            if (!isInvestmentDirector) {
                throw new Error('Only INVESTMENT_DIRECTOR can transfer money');
            }
        }


        // Start a transaction
        const transaction = await this.db.$transaction(async (prisma) => {
            // Create a transaction record
            const transactionData: Prisma.TransactionCreateInput = {
                amount,
                type: isInvestmentDirector ? TransactionType.INCOME : TransactionType.TRANSFER,
                state: isInvestmentDirector ? "APPROVED" : "PENDING",
                incomeSource: isInvestmentDirector ? "MONEY_INVESMENT" : undefined,
                sourceAccount: { connect: { id: sourceAccount.id } },
                destinationAccount: { connect: { id: destinationAccountId } },
            };
            console.log(transactionData);
            await prisma.transaction.create({
                data: transactionData,
            });    
            
            return true;
        });

        return transaction;
    }




    @Mutation(() => Boolean)
    async approveRejectTransactionRequest(
        @Args('approveRejectTransactionInput') approveRejectTransactionInput: ApproveRejectTransactionInput,
    ): Promise<boolean> {
        const { transactionRqId, isApproved } = approveRejectTransactionInput;

        // Fetch the transaction request
        const transactionRequest = await this.db.transaction.findUnique({
            where: { id: transactionRqId },
        });

        if (!transactionRequest) {
            throw new Error('Transaction request not found');
        }

        if (isApproved) {
            // Start a transaction
            await this.db.$transaction(async (prisma) => {
                // Deduct the amount from the sender
                await prisma.account.update({
                    where: { id: transactionRequest.sourceAccountId},
                    data: {
                        amount: { decrement: transactionRequest.amount }
                    },
                });

                // Add the amount to the receiver
                await prisma.account.update({
                    where: { id: transactionRequest.destinationAccountId},
                    data: {
                        amount: { increment: transactionRequest.amount },
                    },
                });

                // Create a transaction record
                const transactionData: Prisma.TransactionCreateInput = {
                    amount: transactionRequest.amount,
                    type: TransactionType.TRANSFER,
                    ...(
                        transactionRequest.sourceAccountId
                            ? { sourceAccount: { connect: { id: transactionRequest.sourceAccountId } } }
                            : undefined
                    ),
                    ...(
                        transactionRequest.destinationAccountId
                            ?  { destinationAccount: { connect: { id: transactionRequest.destinationAccountId } }}
                            : undefined
                    )
                };

                /* await prisma.transaction.create({
                    data: transactionData,
                }); */

                // Update the transaction request status to approved
                await prisma.transaction.update({
                    where: { id: transactionRqId },
                    data: {
                        state: TransactionRequestState.APPROVED,
                    },
                });
            });
        } else {
            // Update the transaction request status to rejected
            // Update the transaction request status to approved
            await this.db.transaction.update({
                where: { id: transactionRqId },
                data: {
                    state: TransactionRequestState.REJECTED,
                },
            });
        }

        return true;
    }
}


