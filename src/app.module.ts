import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { VideosModule } from './modules/videos/videos.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FollowsModule } from './modules/follows/follows.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CommentLikeModule } from './modules/comment-like/comment-like.module';
import { UserHasCommentsModule } from './modules/user-has-comments/user-has-comments.module';
import { PostLikesModule } from './modules/post-likes/post-likes.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PostsModule,
    VideosModule,
    CategoriesModule,
    FollowsModule,
    CommentsModule,
    CommentLikeModule,
    UserHasCommentsModule,
    PostLikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
