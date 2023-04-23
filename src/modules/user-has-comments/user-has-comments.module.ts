import { Module } from '@nestjs/common';
import { UserHasCommentsService } from './user-has-comments.service';
import { UserHasCommentsController } from './user-has-comments.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UserHasCommentsController],
  providers: [UserHasCommentsService, PrismaService]
})
export class UserHasCommentsModule {}
