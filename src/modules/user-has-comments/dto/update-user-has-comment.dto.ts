import { PartialType } from '@nestjs/swagger';
import { CreateUserHasCommentDto } from './create-user-has-comment.dto';

export class UpdateUserHasCommentDto extends PartialType(CreateUserHasCommentDto) {}
