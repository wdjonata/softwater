import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [EventsController],
  providers: [EventsService, PrismaService]
})
export class EventsModule { }
