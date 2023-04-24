import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PostsService } from '../posts/posts.service';

@Module({
  controllers: [VideosController],
  providers: [VideosService, PrismaService, PostsService],
  exports: [VideosService],
})
export class VideosModule {}
