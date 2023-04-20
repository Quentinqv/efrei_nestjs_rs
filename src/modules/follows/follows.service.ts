import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.follow.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.follow.findUnique({
      where: {
        id,
      },
    });
  }

  async checkUsers(user_follower_id: number, user_followed_id: number) {
    const userFollower = await this.prisma.user.findUnique({
      where: {
        id: user_follower_id,
      },
    });
    const userFollowed = await this.prisma.user.findUnique({
      where: {
        id: user_followed_id,
      },
    });
    if (!userFollower) {
      throw new BadRequestException('User follower not found', {
        cause: new Error(),
      });
    }
    if (!userFollowed) {
      throw new BadRequestException('User followed not found', {
        cause: new Error(),
      });
    }
  }

  async alreadyFollowed(user_follower_id: number, user_followed_id: number) {
    const alreadyFollowed = await this.prisma.follow.findFirst({
      where: {
        user_followed_id,
        user_follower_id,
      },
    });
    if (alreadyFollowed) {
      throw new BadRequestException('User already followed', {
        cause: new Error(),
      });
    }
  }

  async create(createFollowDto: CreateFollowDto) {
    await this.checkUsers(
      createFollowDto.user_follower_id,
      createFollowDto.user_followed_id,
    );
    await this.alreadyFollowed(
      createFollowDto.user_follower_id,
      createFollowDto.user_followed_id,
    );
    return this.prisma.follow.create({
      data: createFollowDto,
    });
  }

  async update(id: number, updateFollowDto: UpdateFollowDto) {
    await this.checkUsers(
      updateFollowDto.user_follower_id,
      updateFollowDto.user_followed_id,
    );
    await this.alreadyFollowed(
      updateFollowDto.user_follower_id,
      updateFollowDto.user_followed_id,
    );
    return this.prisma.follow.update({
      where: {
        id,
      },
      data: updateFollowDto,
    });
  }

  async remove(id: number) {
    return this.prisma.follow.delete({
      where: {
        id,
      },
    });
  }
}
