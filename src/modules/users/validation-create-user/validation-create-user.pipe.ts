import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationCreateUserPipe implements PipeTransform {
  transform(value: any) {
    // If the value is type of createUserDto or updateUserDto,
    if (typeof value === 'object') {
      if (value.email) {
        // Check if the email is a valid email address
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value.email)) {
          throw new BadRequestException('Email must be a valid email address');
        }
      }

      // Check if an avatar has been provided, if not, set a default avatar
      if (!value.avatar) {
        value.avatar = 'https://img.freepik.com/free-icon/user_318-563642.jpg';
      } else {
        // Check if the avatar is a valid URL to an image. I.e. it ends with .jpg, .png, .gif, etc.
        const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/gi;
        if (!regex.test(value.avatar)) {
          throw new BadRequestException('Avatar must be a valid URL');
        }
      }
    }

    return value;
  }
}
