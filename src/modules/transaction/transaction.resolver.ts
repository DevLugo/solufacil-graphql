import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ApproveRejectTransactionInput, TransferMoneyInput } from './types';
import { TransactionService } from './transaction.service';
import { Prisma, TransactionRequestState, TransactionType } from '@prisma/client';

@Resolver()
export class TransactionResolver {
    constructor(private readonly db: PrismaService, 
        private readonly transactionService: TransactionService
    ) { }


    @Mutation(() => Boolean)
    async transferMoney(
        @Args('transferMoneyInput') transferMoneyInput: TransferMoneyInput,
    ): Promise<boolean> {
        const { fromId, toId, amount, isInvestment  } = transferMoneyInput;

        // Check if the sender is an account or an employee
        const fromType = await this.transactionService.checkAccountOrEmployee(fromId);
        const toType = await this.transactionService.checkAccountOrEmployee(toId);

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
                type: isInvestmentDirector ? TransactionType.INCOME: TransactionType.TRANSFER,
                state: isInvestmentDirector ? "APPROVED" : "PENDING",
                incomeSource: isInvestmentDirector ? "MONEY_INVESMENT" : undefined,
                ...(
                    fromType === 'account' 
                    ? { sourceAccount: { connect: { id: fromId } } } 
                    : fromId ? { sourceEmployee: { connect: { id: fromId } } }: undefined
                ),
                ...(
                    toType === 'account' 
                    ? { destinationAccount: { connect: { id: toId } } } 
                    : { destinationEmployee: { connect: { id: toId } } }
                )
            };

            await prisma.transaction.create({
                data: transactionData,
            });

            return true;
        });

        return transaction;
    }

    /* await prisma.account.update({
        where: { id: fromId },
        data: {
            balance: {
                "update": {
                    data: { amount: { decrement: amount } },
                }
            }
        },
    }); */
 
    @Mutation(() => Boolean)
    async approveRejectTransactionRequest(
        @Args('approveRejectTransactionInput') approveRejectTransactionInput: ApproveRejectTransactionInput,
    ): Promise<boolean> {
        const { approverId, transactionRqId, isApproved } = approveRejectTransactionInput;

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
                    where: { id: transactionRequest.sourceAccountId || transactionRequest.sourceEmployeeId },
                    data: {
                        balance: {
                            update: {
                                data: { amount: { decrement: transactionRequest.amount } },
                            }
                        },
                    },
                });

                // Add the amount to the receiver
                await prisma.account.update({
                    where: { id: transactionRequest.destinationAccountId || transactionRequest.destinationEmployeeId },
                    data: {
                        balance: {
                            update: {
                                data: { amount: { increment: transactionRequest.amount } },
                            }
                        },
                    },
                });

                // Create a transaction record
                const transactionData: Prisma.TransactionCreateInput = {
                    amount: transactionRequest.amount,
                    type: TransactionType.TRANSFER,
                    ...(
                        transactionRequest.sourceAccountId 
                        ? { sourceAccount: { connect: { id: transactionRequest.sourceAccountId } } } 
                        : { sourceEmployee: { connect: { id: transactionRequest.sourceEmployeeId } } }
                    ),
                    ...(
                        transactionRequest.destinationAccountId 
                        ? { destinationAccount: { connect: { id: transactionRequest.destinationAccountId } } } 
                        : { destinationEmployee: { connect: { id: transactionRequest.destinationEmployeeId } } }
                    )
                };

                await prisma.transaction.create({
                    data: transactionData,
                });

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

 
