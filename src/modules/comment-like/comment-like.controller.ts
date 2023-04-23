import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentLikeService } from './comment-like.service';
import { CreateCommentLikeDto } from './dto/create-comment-like.dto';
import { UpdateCommentLikeDto } from './dto/update-comment-like.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comment-like')
@Controller('comment-like')
export class CommentLikeController {
  constructor(private readonly commentLikeService: CommentLikeService) {}

  @Post()
  create(@Body() createCommentLikeDto: CreateCommentLikeDto) {
    return this.commentLikeService.create(createCommentLikeDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Comment Like found' })
  @ApiResponse({ status: 404, description: 'Comment Like not found' })
  findAll() {
    return this.commentLikeService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Comment Like found' })
  @ApiResponse({ status: 404, description: 'Comment Like not found' })
  findOne(@Param('id') id: string) {
    return this.commentLikeService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Comment Like updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(
    @Param('id') id: string,
    @Body() updateCommentLikeDto: UpdateCommentLikeDto,
  ) {
    return this.commentLikeService.update(+id, updateCommentLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentLikeService.remove(+id);
  }
}
