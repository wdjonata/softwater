import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { OwnerDTO } from './dto/owner.dto';

@Injectable()
export class OwnerService {

  constructor(private prisma: PrismaService) { }

  async create(data: OwnerDTO) {

    const emailExists = await this.prisma.owner.findFirst({
      where: {
        email: data.email
      }
    })

    if (emailExists) {
      throw new BadRequestException("Email already used")
    }

    const owner = await this.prisma.owner.create({
      data,
    })
    return owner;
  }

  async findAll() {
    return this.prisma.owner.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  async update(id: string, data: OwnerDTO) {

    const ownerExists = await this.prisma.owner.findUnique({
      where: {
        id,
      }
    })

    if (!ownerExists) {
      throw new BadRequestException("Owner does not exists!")
    }

    return this.prisma.owner.update({
      data,
      where: {
        id,
      }
    });
  }

  async remove(id: string) {

    const ownerExists = await this.prisma.owner.findUnique({
      where: {
        id,
      }
    })

    if (!ownerExists) {
      throw new BadRequestException("Owner does not exists!")
    }

    return await this.prisma.owner.delete({
      where: {
        id,
      }
    });
  }
}
