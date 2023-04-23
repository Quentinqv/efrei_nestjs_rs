import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Comments found' })
  @ApiResponse({ status: 404, description: 'Comments not found' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Comments found' })
  @ApiResponse({ status: 404, description: 'Comments not found' })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Comments created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Comments updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
