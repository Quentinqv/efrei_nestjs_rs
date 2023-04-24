import { Module } from '@nestjs/common';
import { CommentLikeService } from './comment-like.service';
import { CommentLikeController } from './comment-like.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CommentsService } from '../comments/comments.service';
import { PostsService } from '../posts/posts.service';

@Module({
  controllers: [CommentLikeController],
  providers: [
    CommentLikeService,
    PrismaService,
    UsersService,
    CommentsService,
    PostsService,
  ],
})
export class CommentLikeModule {}
