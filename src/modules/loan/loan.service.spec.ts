import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanService } from './loan.service';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { UtilsService } from './utils.service';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { formatDate } from './loan.spec';
import { Decimal } from '@prisma/client/runtime';


describe('LoanService', () => {
  let loanService: LoanService;
  const db = new PrismaService();
  const utilsService = new UtilsService();

  beforeEach(() => {

    // create new UtilsService service and inject the new services
    const loanPaymentService = new LoanPaymentService(utilsService, db);
    const paymentScheduleService = new PaymentScheduleService(db, utilsService);
    loanService = new LoanService(db, loanPaymentService, paymentScheduleService, utilsService);
  });
  
  //LoanCreateInput
  describe('createLoansProcess', () => {
    jest.setTimeout(10000);

    it('should create loans and return an array of loan objects', async () => {
      //const formattedFirstPaymentDate = formatDate(firstPaymentDate);
      const loansData: CustomCreateLoanInput[] = [
        {
          borrowerId: '1',
          amountGived: new Decimal(3000), // convert number to Decimal
          loanType: { connect: { id: '14' } },
          signDate: '2022-06-12',
          firstPaymentDate: '2022-06-18',
          contract: { connect: { id: '1' } },
          status: 'APPROVED',
          employee: { connect: { id: '1' } },
          weeklyPaymentAmount: new Decimal(10),
        },
      ];
      const createdLoans = await loanService.createLoansProcess(loansData);
      expect(createdLoans).toBeInstanceOf(Array);
      expect(createdLoans.length).toBe(loansData.length);
      let idx = 0;
      for await(const loan of createdLoans) {
        expect(loan).toHaveProperty('id');
        expect(loan).toHaveProperty('createdAt');
        expect(loan).toHaveProperty('updatedAt');
        expect(loan).toHaveProperty('paymentSchedule');

        // retrieve the payment schedule for the loan and test it
        expect(loan.paymentSchedule).toBeInstanceOf(Array);
        const loanType = await db.loantype.findFirst({where: {id: {equals: loansData[idx].loanType.connect.id}}});
        expect(loan.paymentSchedule.length).toBe(loanType.weekDuration);
        const amountGiven = +loansData[idx].amountGived;
        const firstPaymentDate = +loansData[idx].firstPaymentDate;
        const firstPaymentDateObject = new Date(firstPaymentDate);
        const totalAmountToPay = (amountGiven * loanType.rate) + amountGiven;
        const weeklyPaymentAmount = new Decimal(totalAmountToPay / loanType.weekDuration)
        await loan.paymentSchedule.forEach(async(payment, i) => {
          const percentegeToPaid = utilsService.calculatePayedPercentege(+weeklyPaymentAmount, +totalAmountToPay);
          let dueDate = new Date(firstPaymentDateObject.getTime());
          console.log("firstDate", firstPaymentDateObject)
          dueDate.setDate(firstPaymentDateObject.getDate() + ((i+1)*7));

          const profit = utilsService.getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));
          const returnToCapital = +weeklyPaymentAmount - Number(profit);
          expect(payment.numeration).toEqual(i + 1);
          expect(payment.amountToPay).toEqual(weeklyPaymentAmount);
          expect(payment.paidAmount).toEqual(new Decimal(0));
          expect(payment.returnToCapital).toEqual(new Decimal(returnToCapital.toFixed(2)));
          expect(payment.profit).toEqual(new Decimal(+profit));
          expect(new Date(payment.dueDate)).toEqual(dueDate);
        })
        idx++;
      }
    });
  });
});