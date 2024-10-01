interface Tripinfo {
  destination: string;
  date: string;
}

interface IWishlists {
  destination: string;
  date: string;
}

interface ISupportTicket {
  subject: string;
  status: string;
}

interface IRating {
  score: number;
  comment: string;
}
export interface IUser {
  createdAt: string;
  _id: string;
  username: string;
  email: string;
  userImage: string;
  location: string;
  gender: string;
  dateOfBirth: string;
  dateJoined: string;
  savedTripsCount: number;
  verified: string;
  deactivated: boolean;
  phone: number;
  address: string;
  city: string;
  country: string;
  lastLoginDate: string;
  bookedTrips: Tripinfo[];
  travelHistory: Tripinfo[];
  savedWishlists: IWishlists[];
  avgSessionDuration: string;
  activityStatus: string;
  travelInterests: [];
  preferredDestinations: [];
  supportTickets: ISupportTicket[];
  appRatings: IRating[];
}
