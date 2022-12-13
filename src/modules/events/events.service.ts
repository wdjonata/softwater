import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { EventsDTO, QueryParamDTO } from './dto/events.dto';

interface finDate {
  flowmeter_id: string;
  start_date: string;
  end_date: string;
}

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }

  async create(createEventDto: EventsDTO) {

    console.log(createEventDto)
    const flowmeterExists = await this.prisma.flowmeter.findUnique({
      where: {
        id: createEventDto.flowmeter_id,
      }
    })

    if (!flowmeterExists) {
      throw new BadRequestException("Flowmeter does not exists!")
    }

    const event = await this.prisma.events.create({
      data: createEventDto,
    })
    return event;
  }

  async findAll() {
    return this.prisma.events.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  async findDate(param: QueryParamDTO) {
    return this.prisma.events.findMany({
      where: {
        createdAt: {
          gte: new Date(param.startDate),
          lte: new Date(param.endDate)
        },
        flowmeter_id: param.flowmeter_id
      }
    });
  }

  async remove(id: string) {
    const eventExists = await this.prisma.events.findUnique({
      where: {
        id,
      }
    })

    if (!eventExists) {
      throw new BadRequestException("Event does not exists!")
    }

    return await this.prisma.events.delete({
      where: {
        id,
      }
    });
  }
}
