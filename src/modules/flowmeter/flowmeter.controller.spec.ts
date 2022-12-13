import { Test, TestingModule } from '@nestjs/testing';
import { FlowmeterController } from './flowmeter.controller';
import { FlowmeterService } from './flowmeter.service';

describe('FlowmeterController', () => {
  let controller: FlowmeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowmeterController],
      providers: [FlowmeterService],
    }).compile();

    controller = module.get<FlowmeterController>(FlowmeterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
