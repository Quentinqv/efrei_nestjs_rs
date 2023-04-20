import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
    format: 'string',
  })
  username: string;

  @ApiProperty({
    example: 'johndoe@test.fr',
    description: 'The email of the user',
    format: 'string',
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
    format: 'string',
  })
  password: string;

  @ApiProperty({
    example: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
    description: 'The avatar of the user',
    format: 'string',
    default: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
  })
  avatar: string;
}
