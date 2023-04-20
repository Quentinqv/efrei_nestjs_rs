import { Injectable } from '@nestjs/common';
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

  async create(createVideoDto: CreateVideoDto) {
   return await this.prisma.video.create({
      data: createVideoDto,
    });
  }


  async update(id: number, updateVideoDto: UpdateVideoDto) {
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
