import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnerModule } from './modules/owner/owner.module';
import { AddressModule } from './modules/address/address.module';
import { FlowmeterModule } from './modules/flowmeter/flowmeter.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [OwnerModule, AddressModule, FlowmeterModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
