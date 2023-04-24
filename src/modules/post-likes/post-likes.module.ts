import { Module } from '@nestjs/common';
import { PostLikesService } from './post-likes.service';
import { PostLikesController } from './post-likes.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';

@Module({
  controllers: [PostLikesController],
  providers: [PostLikesService, PrismaService, UsersService, PostsService],
  exports: [PostLikesService],
})
export class PostLikesModule {}
