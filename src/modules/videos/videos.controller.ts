import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}


  @Get()
  @ApiResponse({ status: 200, description: 'Video found' })
  @ApiResponse({ status: 404, description: 'Video not found' })
  findAll() {
    return this.videosService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Video found' })
  @ApiResponse({ status: 404, description: 'Video not found' })
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(+id);
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Video created' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Video updated' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }
}
