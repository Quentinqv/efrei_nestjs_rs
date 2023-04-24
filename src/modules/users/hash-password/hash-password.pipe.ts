import { Injectable, PipeTransform } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  async transform(value: any) {
    if (typeof value !== 'object') {
      return value;
    }

    if (value.password !== undefined) {
      value.password = await bcrypt.hash(value.password, 10);
    }
    return value;
  }
}
