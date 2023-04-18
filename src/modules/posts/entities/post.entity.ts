import { User } from "src/modules/users/entities/user.entity";

export class Post {
    id: number;
    description: string;
    user: User["id"];
}
