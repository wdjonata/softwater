import { Module } from '@nestjs/common';
import { FlowmeterService } from './flowmeter.service';
import { FlowmeterController } from './flowmeter.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FlowmeterController],
  providers: [FlowmeterService, PrismaService]
})
export class FlowmeterModule { }
