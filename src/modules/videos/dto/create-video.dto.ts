import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty({
    example: 'https://example.com/video3.mov',
    description: 'The url of the video',
    format: 'string',
  })
  url: string;

  @ApiProperty({
    example: 1,
    description: 'The id of the post',
    format: 'number',
  })
  post_id: number;
}
