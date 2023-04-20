import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Sport',
    description: 'The category name',
    format: 'string',
  })
  name: string;

  @ApiProperty({
    example: '2',
    description: 'The Post id',
    format: 'number',
  })
  post_id: number;
}
