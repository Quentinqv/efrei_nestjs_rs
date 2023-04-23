import { User } from "src/modules/users/entities/user.entity";
import { Comment } from "src/modules/comments/entities/comment.entity";

export class CommentLike {
    id : number;
    comment_id : Comment['id'];
    user_id : User['id'];
}
