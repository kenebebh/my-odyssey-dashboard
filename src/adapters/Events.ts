"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IEventData } from "@/lib/types/event";

const eventService = new ApiService<IEventData[], IEventData>("/events");

// mutation utility
function usersMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (variables: T) => mutationCallback(variables, params),
    retry: 3,
  });
}

// query utility
function usersQuery<B>(
  queryCallback: QueryCallBack<B>,
  queryKey: string[],
  params: string
) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(params),
    retry: 3,
  });
}

const eventsAdapter = {
  getAllEvents: async function () {
    const res = await eventService.getAll("/");
    return res;
  },
  getEventDetails: async function (id: string) {
    const res = await eventService.getById(`${id}`);
    return res;
  },
};
