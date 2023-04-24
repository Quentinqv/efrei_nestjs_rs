import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PostsService } from '../posts/posts.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, PostsService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
