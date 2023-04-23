import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserHasCommentsService } from './user-has-comments.service';
import { CreateUserHasCommentDto } from './dto/create-user-has-comment.dto';
import { UpdateUserHasCommentDto } from './dto/update-user-has-comment.dto';

@Controller('user-has-comments')
export class UserHasCommentsController {
  constructor(private readonly userHasCommentsService: UserHasCommentsService) {}

  @Post()
  create(@Body() createUserHasCommentDto: CreateUserHasCommentDto) {
    return this.userHasCommentsService.create(createUserHasCommentDto);
  }

  @Get()
  findAll() {
    return this.userHasCommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHasCommentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserHasCommentDto: UpdateUserHasCommentDto) {
    return this.userHasCommentsService.update(+id, updateUserHasCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasCommentsService.remove(+id);
  }
}
