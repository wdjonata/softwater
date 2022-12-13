import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerDTO } from './dto/owner.dto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) { }

  @Post()
  async create(@Body() createOwnerDto: OwnerDTO) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  findAll() {
    return this.ownerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOwnerDto: OwnerDTO) {
    return this.ownerService.update(id, updateOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerService.remove(id);
  }
}
