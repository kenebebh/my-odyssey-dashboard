export interface IExperience {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  type: "Luxury" | "Cultural" | "Adventure" | "Budget";
  votes: number;
  submittedBy: string; // User ID reference
  tags: string[];
  ratings: {
    average: number;
    totalVotes: number;
  };
}

export interface IExperienceData {
  success: boolean;
  experience: IExperience;
}

export interface ITopExperiences {
  data: IExperience[];
}

export interface ILimitedExperiences {
  data: IExperience[];
}
