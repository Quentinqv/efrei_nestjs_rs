import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    example: 'Ceci est un commentaire intéressant.',
    description: 'The content of the comment',
    format: 'string',
  })
  content: string;
}
