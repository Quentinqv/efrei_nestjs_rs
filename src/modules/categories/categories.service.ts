import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class CategoriesService {
  constructor(
    private prisma: PrismaService,
    private postsService: PostsService,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    await this.postsService.findOne(createCategoryDto.post_id);

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
    if ((await this.findOne(id)) === null) {
      return new BadRequestException('Category not found', {
        cause: new Error(),
      });
    }

    return await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
