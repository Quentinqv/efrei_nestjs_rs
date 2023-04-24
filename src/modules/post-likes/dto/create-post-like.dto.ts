import { ApiProperty } from '@nestjs/swagger';

export class CreatePostLikeDto {
  @ApiProperty({
    example: '2',
    description: 'The user id',
    format: 'number',
  })
  user_id: number;

  @ApiProperty({
    example: '3',
    description: 'The post id',
    format: 'number',
  })
  post_id: number;
}
