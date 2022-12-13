import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AddressDTO } from './dto/address.dto';

@Injectable()
export class AddressService {

  constructor(private prisma: PrismaService) { }

  async create(createAddressDto: AddressDTO) {
    const address = await this.prisma.address.create({
      data: createAddressDto,
    })
    return address;;
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  async update(id: string, updateAddressDto: AddressDTO) {

    const addressExists = await this.prisma.address.findUnique({
      where: {
        id,
      }
    })

    if (!addressExists) {
      throw new BadRequestException("Address does not exists!")
    }

    return this.prisma.address.update({
      data: updateAddressDto,
      where: {
        id,
      }
    });
  }

  async remove(id: string) {
    const addressExists = await this.prisma.address.findUnique({
      where: {
        id,
      }
    })

    if (!addressExists) {
      throw new BadRequestException("Address does not exists!")
    }

    return await this.prisma.address.delete({
      where: {
        id,
      }
    });
  }
}
