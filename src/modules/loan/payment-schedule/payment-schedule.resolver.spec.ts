import { Test, TestingModule } from '@nestjs/testing';
import { PaymentScheduleResolver } from './payment-schedule.resolver';

describe('PaymentScheduleResolver', () => {
  let resolver: PaymentScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentScheduleResolver],
    }).compile();

    resolver = module.get<PaymentScheduleResolver>(PaymentScheduleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
