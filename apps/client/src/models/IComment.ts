import IUser from './IUser';

export default interface IComment {
  id: string;
  text: string;
  user: IUser;
  heart: number;
}
