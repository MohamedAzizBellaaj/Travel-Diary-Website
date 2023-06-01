import IPost from './IPost';

export default interface IUser {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  mail?: string;
  password?: string;
  avatar?: string;
  coverPhoto?: string;
  toReadLater?: IPost[];
  favorites?: IPost[];
  follower?: IUser[];
  following?: IUser[];
}
