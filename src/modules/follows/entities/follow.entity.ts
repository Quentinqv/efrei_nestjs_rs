import { User } from 'src/modules/users/entities/user.entity';

export class Follow {
  id: number;
  user_followed_id: User['id'];
  user_follower_id: User['id'];
}
