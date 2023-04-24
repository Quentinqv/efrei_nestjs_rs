import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { UpdatePostLikeDto } from './dto/update-post-like.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class PostLikesService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  async checkExist(id: number) {
    const postLike = await this.prisma.post_like.findUnique({
      where: {
        id: id,
      },
    });

    if (!postLike) {
      throw new BadRequestException(`PostLike with id ${id} does not exist`);
    }
  }

  async create(createPostLikeDto: CreatePostLikeDto) {
    await this.usersService.checkExists(createPostLikeDto.user_id);
    await this.postsService.checkExists(createPostLikeDto.post_id);

    // Check if the user has already liked the post
    const postLike = await this.prisma.post_like.findFirst({
      where: {
        user_id: createPostLikeDto.user_id,
        post_id: createPostLikeDto.post_id,
      },
    });

    // if the user doesn't like the post, create a new like
    if (!postLike) {
      return this.prisma.post_like.create({
        data: createPostLikeDto,
      });
    } else {
      return this.remove(postLike.id);
    }
  }

  async findAll() {
    return await this.prisma.post_like.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.post_like.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updatePostLikeDto: UpdatePostLikeDto) {
    await this.checkExist(id);

    return this.prisma.post_like.update({
      where: {
        id: id,
      },
      data: updatePostLikeDto,
    });
  }

  async remove(id: number) {
    await this.checkExist(id);

    return this.prisma.post_like.delete({
      where: {
        id: id,
      },
    });
  }
}
