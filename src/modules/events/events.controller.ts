import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsDTO, QueryParamDTO } from './dto/events.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Post()
  create(@Body() createEventDto: EventsDTO) {
    return this.eventsService.create(createEventDto);
  }

  //@Get()
  //findAll() {
  //  console.log(new Date('2022-10-27'))
  //  return this.eventsService.findDate();
  //}

  @Get(':id')
  findOne(@Param('id',) id: string) {
    return this.eventsService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Get()
  find(@Query() param: QueryParamDTO) {
    console.log('DATE')
    return this.eventsService.findDate(param)
  }

}
