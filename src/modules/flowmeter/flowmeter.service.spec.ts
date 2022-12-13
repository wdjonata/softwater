import { Test, TestingModule } from '@nestjs/testing';
import { FlowmeterService } from './flowmeter.service';

describe('FlowmeterService', () => {
  let service: FlowmeterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowmeterService],
    }).compile();

    service = module.get<FlowmeterService>(FlowmeterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
