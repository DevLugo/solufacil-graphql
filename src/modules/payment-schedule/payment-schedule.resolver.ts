import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaymentSchedule, PaymentScheduleWhereInput } from './types';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Resolver(PaymentSchedule)
export class PaymentScheduleResolver {
    constructor(
        private readonly _db: PrismaService
    ) {}
    
    @Query(() => [PaymentSchedule])
    async getPaymentSchedules(
        @Args('where', {nullable:true}) where: PaymentScheduleWhereInput,
    ) {
        return this._db.paymentSchedule.findMany(
            {
                where: {
                    loan: {
                        is: {
                            contract: where.leadId ? {
                                is: {
                                    loanLead: {
                                        is: {
                                            id: {
                                                equals: where.leadId
                                            }
                                        }
                                    }
                                }
                            } : undefined
                        }
                    },
                    dueDate: where.dueDate ? {
                        lte: where.dueDate
                    } : undefined,
                    OR: [
                        {
                            status: where.paymentState ?{
                                in: where.paymentState
                            } : undefined
                        },
                        {
                            delayed: {
                                equals: true
                            }
                        }
                    ]
                }
            }  
        );
    }   
}
