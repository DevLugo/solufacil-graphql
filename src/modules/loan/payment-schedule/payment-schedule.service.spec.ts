import { Test, TestingModule } from '@nestjs/testing';
import { PaymentScheduleService } from './payment-schedule.service';

describe('PaymentScheduleService', () => {
  let service: PaymentScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentScheduleService],
    }).compile();

    service = module.get<PaymentScheduleService>(PaymentScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
