"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IExperience, ILimitedExperiences } from "@/lib/types/experiences";
import { IEventData } from "@/lib/types/event";
import { queryWithErrorHandling } from "@/hooks/queryWithErrorHandling";

const experienceService = new ApiService<IExperience[], IExperience>(
  "/top-experiences"
);
const experienceQueryService = new ApiService<ILimitedExperiences, IExperience>(
  "/top-experiences"
);

//mutation utility
function experiencesMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (variables: T) => mutationCallback(variables, params),
    retry: 3,
  });
}

// query utility
// function experiencesQuery<B>(
//   queryCallback: QueryCallBack<B>,
//   queryKey: string[],
//   params: string | number
// ) {
//   return useQuery({
//     queryKey: queryKey,
//     queryFn: () => queryCallback(params),
//     retry: 3,
//   });
// }

// query utility with error handling
function experiencesQuery<TData = IExperience | IExperience[]>(
  queryCallback: QueryCallBack<TData>,
  queryKey: string[],
  params: string | number
) {
  return queryWithErrorHandling<TData, unknown, TData, string[]>(
    queryCallback,
    queryKey,
    params,
    { retry: 3 }
  );
}

// Interface for the TopExperienceAdapter
interface ITopExperienceAdapter {
  getAllExperiences: () => Promise<IExperience[]>;
  getLimitedExperiences: (
    limit: number | string
  ) => Promise<ILimitedExperiences>;
  getExperienceDetails: (id: string | number) => Promise<IExperience>;
  editExperienceDetails: (payload: any, params: string) => Promise<any>;
  deleteExperience: (id: string) => Promise<void>;
}

const TopExperienceAdapter: ITopExperienceAdapter = {
  getAllExperiences: async function () {
    const res = await experienceService.getAll("/");
    return res;
  },
  getLimitedExperiences: async function (limit: number | string) {
    const res = await experienceQueryService.getAll(`?limit=${limit}`);
    return res;
  },
  getExperienceDetails: async function (id: string | number) {
    const res = await experienceService.getById(`${id}`);
    return res;
  },
  editExperienceDetails: async function (payload: any, params: string) {
    const res = await experienceService.mutate(
      `${params}`,
      payload,
      "JSON",
      "PATCH"
    );
    return res;
  },
  deleteExperience: async function (id: string) {
    const res = await experienceService.mutate(id, {}, "JSON", "DELETE");
  },
};

export { experiencesMutation, experiencesQuery, TopExperienceAdapter };
