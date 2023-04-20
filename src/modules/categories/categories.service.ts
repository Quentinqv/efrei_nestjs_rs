import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const categoryExists = await this.prisma.category.findFirst({
      where: {
        name: createCategoryDto.name,
        post_id: createCategoryDto.post_id,
      },
    });

    if (categoryExists) {
      return new BadRequestException('Category already exists', {
        cause: new Error(),
      });
    }

    return await this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
