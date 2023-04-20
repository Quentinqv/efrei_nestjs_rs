import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'Ma premiere description oooui',
    description: 'The description of the post',
    format: 'string',
  })
  description: string;

  @ApiProperty({
    example: 1,
    description: 'The id of the user',
    format: 'number',
  })
  user_id: number;
}
