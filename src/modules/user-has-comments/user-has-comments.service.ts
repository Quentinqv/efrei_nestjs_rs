import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserHasCommentDto } from './dto/create-user-has-comment.dto';
import { UpdateUserHasCommentDto } from './dto/update-user-has-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserHasCommentsService {
  constructor(private prisma: PrismaService) {}

  async checkExists(id: number) {
    const userHasComment = await this.findOne(id);

    if (!userHasComment) {
      throw new BadRequestException('UserHasComment does not exist', {
        cause: new Error(),
      });
    }
  }

  async create(createUserHasCommentDto: CreateUserHasCommentDto) {
    return await this.prisma.user_has_comment.create({
      data: createUserHasCommentDto,
    });
  }

  async findAll() {
    return await this.prisma.user_has_comment.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user_has_comment.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserHasCommentDto: UpdateUserHasCommentDto) {
    await this.checkExists(id);

    return await this.prisma.user_has_comment.update({
      where: {
        id,
      },
      data: updateUserHasCommentDto,
    });
  }

  async remove(id: number) {
    await this.checkExists(id);

    return await this.prisma.user_has_comment.delete({
      where: {
        id,
      },
    });
  }
}
