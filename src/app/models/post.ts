import {Comments} from "./comments";

export interface Post {
  username: string
  dateOfPublication: string
  description: string
  cakeImageSource: any
  likes: number
  comments: number
  listOfComments: Comments[]
}
