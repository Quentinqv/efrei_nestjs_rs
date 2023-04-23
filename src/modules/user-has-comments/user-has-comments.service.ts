import { Injectable } from '@nestjs/common';
import { CreateUserHasCommentDto } from './dto/create-user-has-comment.dto';
import { UpdateUserHasCommentDto } from './dto/update-user-has-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserHasCommentsService {
  constructor(private prisma: PrismaService) {}

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
    return await this.prisma.user_has_comment.update({
      where: {
        id,
      },
      data: updateUserHasCommentDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user_has_comment.delete({
      where: {
        id,
      },
    });
  }
}
