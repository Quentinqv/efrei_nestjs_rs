import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [FollowsController],
  providers: [FollowsService, PrismaService, UsersService],
  exports: [FollowsService],
})
export class FollowsModule {}
