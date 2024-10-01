export interface IUser {
  createdAt: string;
  _id: string;
  username: string;
  email: string;
  userImage: string;
  location: string;
  dateJoined: string;
  savedTrips: number;
  verified: string;
  deactivated: boolean;
}
