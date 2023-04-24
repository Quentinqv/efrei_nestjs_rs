import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class FollowsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

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
    await this.usersService.checkExists(createFollowDto.user_follower_id);
    await this.usersService.checkExists(createFollowDto.user_followed_id);

    await this.alreadyFollowed(
      createFollowDto.user_follower_id,
      createFollowDto.user_followed_id,
    );
    return this.prisma.follow.create({
      data: createFollowDto,
    });
  }

  async update(id: number, updateFollowDto: UpdateFollowDto) {
    await this.usersService.checkExists(updateFollowDto.user_follower_id);
    await this.usersService.checkExists(updateFollowDto.user_followed_id);

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
    if (!this.findOne(id)) {
      throw new BadRequestException('Follow does not exist', {
        cause: new Error(),
      });
    }

    return this.prisma.follow.delete({
      where: {
        id,
      },
    });
  }
}
