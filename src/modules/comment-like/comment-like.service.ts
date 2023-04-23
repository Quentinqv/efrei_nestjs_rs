import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentLikeDto } from './dto/create-comment-like.dto';
import { UpdateCommentLikeDto } from './dto/update-comment-like.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentLikeService {
  constructor(private prisma: PrismaService) {}

  async checkExits(user_id: number, comment_id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: comment_id,
      },
    });
    if (!user) {
      throw new BadRequestException('User not found', {
        cause: new Error(),
      });
    }
    if (!comment) {
      throw new BadRequestException('Comment not found', {
        cause: new Error(),
      });
    }
  }

  async alreadyLiked(user_id: number, comment_id: number) {
    const alreadyLiked = await this.prisma.comment_like.findFirst({
      where: {
        user_id,
        comment_id,
      },
    });
    if (alreadyLiked) {
      throw new BadRequestException('User already liked', {
        cause: new Error(),
      });
    }
  }

  async create(createCommentLikeDto: CreateCommentLikeDto) {
    await this.checkExits(
      createCommentLikeDto.user_id,
      createCommentLikeDto.comment_id,
    );
    await this.alreadyLiked(
      createCommentLikeDto.user_id,
      createCommentLikeDto.comment_id,
    );
    return this.prisma.comment_like.create({
      data: createCommentLikeDto,
    });
  }

  async findAll() {
    return await this.prisma.comment_like.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.comment_like.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCommentLikeDto: UpdateCommentLikeDto) {
    await this.checkExits(
      updateCommentLikeDto.user_id,
      updateCommentLikeDto.comment_id,
    );
    await this.alreadyLiked(
      updateCommentLikeDto.user_id,
      updateCommentLikeDto.comment_id,
    );
    return this.prisma.comment_like.update({
      where: {
        id,
      },
      data: updateCommentLikeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.comment_like.delete({
      where: {
        id,
      },
    });
  }
}
