import { Test, TestingModule } from '@nestjs/testing';
import { LoanPaymentService } from './loan-payment.service';

describe('LoanPaymentService', () => {
  let service: LoanPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanPaymentService],
    }).compile();

    service = module.get<LoanPaymentService>(LoanPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
