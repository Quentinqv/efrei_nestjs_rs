import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FollowsService } from './follows.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('follows')
@Controller('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Follows found' })
  @ApiResponse({ status: 404, description: 'Follows not found' })
  findAll() {
    return this.followsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Follow found' })
  @ApiResponse({ status: 404, description: 'Follow not found' })
  findOne(@Param('id') id: string) {
    return this.followsService.findOne(+id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Follow created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsService.create(createFollowDto);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Follow updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followsService.update(+id, updateFollowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followsService.remove(+id);
  }
}
