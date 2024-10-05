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
  firstName: string;
  lastName: string;
  email: string;
  userImage: string;
  gender: string;
  dateOfBirth: string;
  dateJoined: string;
  savedTripsCount: number;
  verified: "verified" | "unverified";
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
