import { Post } from 'src/modules/posts/entities/post.entity';

export class Category {
  id: number;
  name: string;
  post_id: Post['id'];
}
