import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async checkExists(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist', {
        cause: new Error(),
      });
    }

    return true;
  }

  async checkExistsByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist', {
        cause: new Error(),
      });
    }

    return true;
  }

  async findAll() {
    // Get all users from database using Prisma
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist', {
        cause: new Error(),
      });
    }

    return user;
  }

  async findOneByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist', {
        cause: new Error(),
      });
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    await this.checkExistsByUsername(createUserDto.username);

    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.checkExists(id);

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new BadRequestException('User does not exist', {
        cause: new Error(),
      });
    }
  }
}
