import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostLikesService } from './post-likes.service';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { UpdatePostLikeDto } from './dto/update-post-like.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('post-likes')
@Controller('post-likes')
export class PostLikesController {
  constructor(private readonly postLikesService: PostLikesService) {}

  @Post()
  create(@Body() createPostLikeDto: CreatePostLikeDto) {
    return this.postLikesService.create(createPostLikeDto);
  }

  @Get()
  findAll() {
    return this.postLikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postLikesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostLikeDto: UpdatePostLikeDto,
  ) {
    return this.postLikesService.update(+id, updatePostLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postLikesService.remove(+id);
  }
}
