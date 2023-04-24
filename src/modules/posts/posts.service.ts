import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async checkExists(id: number) {
    const post = await this.findOne(id);

    if (!post) {
      throw new BadRequestException('Post does not exist', {
        cause: new Error(),
      });
    }

    return true;
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createPostDto: CreatePostDto) {
    return await this.prisma.post.create({
      data: createPostDto,
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    await this.checkExists(id);

    return await this.prisma.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    await this.checkExists(id);

    return await this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
