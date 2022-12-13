import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlowmeterService } from './flowmeter.service';
import { FlowmeterDTO } from './dto/flowmeter.dto';

@Controller('flowmeter')
export class FlowmeterController {
  constructor(private readonly flowmeterService: FlowmeterService) { }

  @Post()
  create(@Body() createFlowmeterDto: FlowmeterDTO) {
    return this.flowmeterService.create(createFlowmeterDto);
  }

  @Get()
  findAll() {
    return this.flowmeterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowmeterService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowmeterService.remove(id);
  }
}
