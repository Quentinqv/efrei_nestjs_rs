import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { VideosModule } from './modules/videos/videos.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [UsersModule, AuthModule, PostsModule, VideosModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
