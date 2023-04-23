import { Module } from '@nestjs/common';
import { UserHasCommentsService } from './user-has-comments.service';
import { UserHasCommentsController } from './user-has-comments.controller';

@Module({
  controllers: [UserHasCommentsController],
  providers: [UserHasCommentsService]
})
export class UserHasCommentsModule {}
