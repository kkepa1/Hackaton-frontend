import {User} from "./user";

export interface Post {
  user: User;
  description: string;
  image: string;
}
