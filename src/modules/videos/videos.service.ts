import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private postsService: PostsService,
  ) {}

  async checkExists(id: number) {
    const video = await this.findOne(id);

    if (!video) {
      throw new BadRequestException('Video does not exist', {
        cause: new Error(),
      });
    }
  }

  async findAll() {
    return await this.prisma.video.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.video.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createVideoDto: CreateVideoDto) {
    await this.postsService.checkExists(createVideoDto.post_id);

    return await this.prisma.video.create({
      data: createVideoDto,
    });
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    await this.checkExists(id);

    return await this.prisma.video.update({
      where: {
        id,
      },
      data: updateVideoDto,
    });
  }

  async remove(id: number) {
    await this.checkExists(id);

    return await this.prisma.video.delete({
      where: {
        id,
      },
    });
  }
}
