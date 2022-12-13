import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { FlowmeterDTO } from './dto/flowmeter.dto';

@Injectable()
export class FlowmeterService {

  constructor(private prisma: PrismaService) { }

  async create(createFlowmeterDto: FlowmeterDTO) {

    const addressExists = await this.prisma.address.findFirst({
      where: {
        id: createFlowmeterDto.address_id
      }
    })

    if (!addressExists) {
      throw new BadRequestException("Address does not exists")
    }

    const ownerExists = await this.prisma.owner.findFirst({
      where: {
        id: createFlowmeterDto.owner_id
      }
    })

    if (!ownerExists) {
      throw new BadRequestException("Owner does not exists")
    }

    const nameExists = await this.prisma.flowmeter.findFirst({
      where: {
        name: createFlowmeterDto.name
      }
    })

    if (nameExists) {
      throw new BadRequestException("Flowmeter already exists")
    }

    const flowmeter = await this.prisma.flowmeter.create({
      data: {
        id: createFlowmeterDto.id,
        owner_Id: createFlowmeterDto.owner_id,
        address_Id: createFlowmeterDto.address_id,
        name: createFlowmeterDto.name,
      }
    })
    return flowmeter;
  }

  findAll() {
    return this.prisma.flowmeter.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} flowmeter`;
  }

  async remove(id: string) {
    const flowmeterExists = await this.prisma.flowmeter.findUnique({
      where: {
        id,
      }
    })

    if (!flowmeterExists) {
      throw new BadRequestException("Flowmeter does not exists!")
    }

    return await this.prisma.flowmeter.delete({
      where: {
        id,
      }
    });
  }
}
