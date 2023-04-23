import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserHasCommentsService } from './user-has-comments.service';
import { CreateUserHasCommentDto } from './dto/create-user-has-comment.dto';
import { UpdateUserHasCommentDto } from './dto/update-user-has-comment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user-has-comments')
@Controller('user-has-comments')
export class UserHasCommentsController {
  constructor(
    private readonly userHasCommentsService: UserHasCommentsService,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User Has Comments created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createUserHasCommentDto: CreateUserHasCommentDto) {
    return this.userHasCommentsService.create(createUserHasCommentDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'User Has Comments found' })
  @ApiResponse({ status: 404, description: 'User Has Comments not found' })
  findAll() {
    return this.userHasCommentsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User Has Comments found' })
  @ApiResponse({ status: 404, description: 'User Has Comments not found' })
  findOne(@Param('id') id: string) {
    return this.userHasCommentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'User Has Comments updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(
    @Param('id') id: string,
    @Body() updateUserHasCommentDto: UpdateUserHasCommentDto,
  ) {
    return this.userHasCommentsService.update(+id, updateUserHasCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasCommentsService.remove(+id);
  }
}
