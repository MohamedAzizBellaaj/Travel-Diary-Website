import IComment from './IComment';
import ITag from './ITag';
import IUser from './IUser';

export default interface IPost {
  id?: number;
  title?: string;
  images?: string[];
  text?: string;
  user?: IUser;
  location?: string;
  comments?: IComment[];
  tags?: ITag[];
  createdAt?: Date;
}
