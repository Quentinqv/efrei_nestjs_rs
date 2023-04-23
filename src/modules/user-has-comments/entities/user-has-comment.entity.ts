import { Post } from 'src/modules/posts/entities/post.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Comment } from 'src/modules/comments/entities/comment.entity';

export class UserHasComment {
    id: number;
    user_id: User['id'];
    comment_id: Comment['id'];
    post_id: Post['id'];
}
