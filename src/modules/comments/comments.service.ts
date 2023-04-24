import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async checkExists(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });

    if (!comment) {
      throw new BadRequestException('Comment does not exist', {
        cause: new Error(),
      });
    }
  }

  async findAll() {
    return await this.prisma.comment.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createCommentDto: CreateCommentDto) {
    return await this.prisma.comment.create({
      data: createCommentDto,
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.checkExists(id);

    return await this.prisma.comment.update({
      where: {
        id,
      },
      data: updateCommentDto,
    });
  }

  async remove(id: number) {
    await this.checkExists(id);

    return await this.prisma.comment.delete({
      where: {
        id,
      },
    });
  }
}
