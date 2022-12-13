import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [AddressController],
  providers: [AddressService, PrismaService]
})
export class AddressModule { }
