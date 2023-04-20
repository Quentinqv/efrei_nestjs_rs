import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
    format: 'string',
  })
  username: string;

  @ApiProperty({
    example: 'MyPassword',
    description: 'The password of the user',
    format: 'string',
  })
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
