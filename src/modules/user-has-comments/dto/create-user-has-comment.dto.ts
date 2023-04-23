import { ApiProperty } from '@nestjs/swagger';

export class CreateUserHasCommentDto {
  @ApiProperty({
    example: '2',
    description: 'The user id',
    format: 'number',
  })
  user_id: number;

  @ApiProperty({
    example: '2',
    description: 'The Comment id',
    format: 'number',
  })
  comment_id: number;

  @ApiProperty({
    example: '2',
    description: 'The Post id',
    format: 'number',
  })
  post_id: number;
}
