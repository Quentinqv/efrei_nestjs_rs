import { User } from 'src/modules/users/entities/user.entity';
import { Post } from 'src/modules/posts/entities/post.entity';

export class PostLike {
  user_id: User['id'];
  post_id: Post['id'];
}
