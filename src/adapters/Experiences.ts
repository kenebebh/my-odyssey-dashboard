"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IExperience, ILimitedExperiences } from "@/lib/types/experiences";
import { IEventData } from "@/lib/types/event";

const experienceService = new ApiService<IExperience[], IExperience>(
  "/top-expriences"
);
const experienceQueryService = new ApiService<ILimitedExperiences, IExperience>(
  "/top-expriences"
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
function experiencesQuery<B>(
  queryCallback: QueryCallBack<B>,
  queryKey: string[],
  params: string | number
) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(params),
    retry: 3,
  });
}

const TopExperienceAdapter = {
  getAllExperiences: async function () {
    const res = await experienceService.getAll("/");
    return res;
  },
  getLimitedExperiences: async function (limit: number | string) {
    const res = await experienceQueryService.getAll(`?limit=${limit}`);
  },
  getExperienceDetails: async function (id: string) {
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
