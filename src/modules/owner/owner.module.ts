import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService, PrismaService]
})
export class OwnerModule { }
