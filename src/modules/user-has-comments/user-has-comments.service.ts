import { Injectable } from '@nestjs/common';
import { CreateUserHasCommentDto } from './dto/create-user-has-comment.dto';
import { UpdateUserHasCommentDto } from './dto/update-user-has-comment.dto';

@Injectable()
export class UserHasCommentsService {
  create(createUserHasCommentDto: CreateUserHasCommentDto) {
    return 'This action adds a new userHasComment';
  }

  findAll() {
    return `This action returns all userHasComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHasComment`;
  }

  update(id: number, updateUserHasCommentDto: UpdateUserHasCommentDto) {
    return `This action updates a #${id} userHasComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHasComment`;
  }
}
