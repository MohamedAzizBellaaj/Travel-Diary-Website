import IPost from './IPost';

export default interface IUser {
  id?: number;
  userName?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  mail?: string;
  password?: string;
  avatar?: string;
  toReadLater?: IPost[];
  favorites?: IPost[];
  follower?: IUser[];
  following?: IUser[];
}
