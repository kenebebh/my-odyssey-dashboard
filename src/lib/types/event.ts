interface EventMetrics {
  attendees: number;
  rating: number;
  impressions: number;
  ticketsBooked: number;
}

export interface IEvent {
  createdAt: string;
  id: string;
  name: string;
  startDate: string; // Could use Date type if handling Date objects
  endDate: string; // Could use Date type if handling Date objects
  country: string;
  description: string;
  image: string;
  status: "Active" | "Closed" | "Upcoming"; // Using a union type for possible status values
  location: string;
  startTime: string;
  endTime: string;
  ticketPrice: string;
  ticketAvailability: "Available" | "Sold Out";
  gallery: string[]; // Array of image URLs
  ads: string[]; // Array of ad names
  adStatus: "Running" | "Paused" | "Ended";
  metrics: EventMetrics; // Metrics data with specific types for each
}

export interface IEventData {
  success: boolean;
  event: IEvent;
}

export interface IEvents {
  data: IEvent[];
}

export interface IEventLimit {
  data: IEvent[];
}
