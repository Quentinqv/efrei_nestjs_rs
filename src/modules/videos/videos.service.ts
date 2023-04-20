import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}

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

  async checkPost(post_id: number) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: post_id,
      },
    });
    if (!post) {
      console.log('non');
      throw new BadRequestException('Post not found', {
        cause: new Error(),
      });
    }
  }

  async create(createVideoDto: CreateVideoDto) {
    await this.checkPost(createVideoDto.post_id);
    return await this.prisma.video.create({
      data: createVideoDto,
    });
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    await this.checkPost(updateVideoDto.post_id);
    return await this.prisma.video.update({
      where: {
        id,
      },
      data: updateVideoDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.video.delete({
      where: {
        id,
      },
    });
  }
}
