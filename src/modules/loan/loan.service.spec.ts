import { PrismaClient } from '@prisma/client';
import { LoanService } from './loan.service';

describe('LoanService', () => {
  let service: LoanService;
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(() => {
    service = new LoanService(prisma);
  });

  describe('createLoanProccess', () => {
    it('should create a new loan', async () => {
      const data = {
        amountGived: 1000,
        loanType: { connect: { id: 1 } },
        contract: { connect: { id: 1 } },
        firstPaymentDate: new Date(),
      };
      const loanType = { id: 1, rate: 0.1, weekDuration: 4 };
      const contract = { id: 1, contractType: { amount: 2000 } };
      const expectedLoan = { id: expect.any(Number), ...data, loanType, weeklyPaymentAmount: 275, amountToPay: 1100, pendingAmount: 1100, baseProfitAmount: 100, status: 'APPROVED', renovationPendingAmount: 0, renovationProfitAmount: 0, totalProfitAmount: 100, renovatedFromId: null };

      await prisma.loanType.create({ data: loanType });
      await prisma.contract.create({ data: contract });

      const result = await service.createLoanProccess(data);

      expect(result).toEqual(expectedLoan);
    });
  });
});