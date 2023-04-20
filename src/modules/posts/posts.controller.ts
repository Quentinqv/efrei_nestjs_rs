import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Posts found' })
  @ApiResponse({ status: 404, description: 'Posts not found' })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Posts found' })
  @ApiResponse({ status: 404, description: 'Posts not found' })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Posts created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Posts updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
