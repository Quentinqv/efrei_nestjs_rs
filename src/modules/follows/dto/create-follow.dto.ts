import { ApiProperty } from '@nestjs/swagger';

export class CreateFollowDto {
  @ApiProperty({
    example: 1,
    description: 'The id of the followed user',
    format: 'number',
  })
  user_followed_id: number;

  @ApiProperty({
    example: 2,
    description: 'The id of the follower user',
    format: 'number',
  })
  user_follower_id: number;
}
