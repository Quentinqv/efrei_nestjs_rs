import { Body, Injectable, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { HashPasswordPipe } from './hash-password/hash-password.pipe';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // Get all users from database using Prisma
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findOneByUsername(username: string) {
    return await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log('update service');

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
