import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Loan } from '@generated/prisma-nestjs-graphql/loan/loan.model';
import { Loantype } from '@generated/prisma-nestjs-graphql/loantype/loantype.model';
import { PaymentScheduleWhereInput } from '@generated/prisma-nestjs-graphql/payment-schedule/payment-schedule-where.input';
import { PaymentSchedule } from '@generated/prisma-nestjs-graphql/payment-schedule/payment-schedule.model';
import { PrismaService } from 'core/prisma/prisma.service';
import { LoanTypeService } from '../loan-type/loan-type.service';
import { LoanService } from '../loan.service';
import { PaymentBreakDown, UtilsService } from '../utils.service';
import { RangeDaysInput } from './inputs/RangeDaysInput';
import { IResumePayload } from './payloads/resume';
import { PaymentScheduleService } from './payment-schedule.service';

@Resolver(() => PaymentSchedule)
export class PaymentScheduleResolver {
    constructor(
        private readonly UtilsService: UtilsService,
        private readonly LoanService: LoanService,
        private readonly _db: PrismaService,
        private readonly LoanPaymentScheduleService: PaymentScheduleService
        ){}
    @ResolveField(returns => PaymentBreakDown)
    async paymentBreakDown(@Parent() root: PaymentSchedule) {
        const { amountToPay } = root;
        const data = await this._db.loan.findFirst({
            where:{id:root.loanId},
            include:{
                loanType:true
            }
        });
        const rate = data.loanType.rate

        return this.UtilsService.paymentBreakDown(amountToPay, rate);
    }

    @ResolveField(returns => Loan)
    async loan(@Parent() root: PaymentSchedule) {
        return this.LoanService.get(root.loanId);
    }
    

    @Query(() => [PaymentSchedule])
    async paymentSchedulesWhere(
        @Args({ name: 'where', type: () =>PaymentScheduleWhereInput})
        where:PaymentScheduleWhereInput
    ) {
        return await this.LoanPaymentScheduleService.getPaymentSchedulesWhere(where);
    }

    @Query(() => IResumePayload)
    async rangeResume(
        @Args({ name: 'where', type: () => RangeDaysInput})
        where:RangeDaysInput
    ) {
        const { dateStart, dateEnd } = where;
        return await this.LoanPaymentScheduleService
            .rangeResume(new Date(dateStart),  new Date(dateEnd));
    }
}
