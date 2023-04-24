import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentLikeDto } from './dto/create-comment-like.dto';
import { UpdateCommentLikeDto } from './dto/update-comment-like.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class CommentLikeService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
    private postService: PostsService,
  ) {}

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
    await this.userService.checkExists(createCommentLikeDto.user_id);
    await this.postService.checkExists(createCommentLikeDto.comment_id);

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
    await this.userService.checkExists(updateCommentLikeDto.user_id);
    await this.postService.checkExists(updateCommentLikeDto.comment_id);

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
