import {Comments} from "./comments";

export interface Post {
  comments: Comments[]
  description: string
  id: number
  image: any
  likes: number
  localDate: any
  user: any
}
