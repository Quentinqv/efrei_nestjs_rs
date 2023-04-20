import { Post } from 'src/modules/posts/entities/post.entity';

export class Video {
  id: number;
  url: string;
  post_id: Post['id'];
}
