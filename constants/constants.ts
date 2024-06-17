export interface Post {
  __typename: string;
  id: number;
  userId: number;
  title: string;
  body: string;
  userName: string;
}

export interface User {
  __typename: string;
  id: number;
  name: string;
}
export interface IComment {
  __typename: string;
  id: number;
  body: string;
  name: string;
  postId: number;
}
export interface PostWithUserName extends Post {
  userName: string;
}
