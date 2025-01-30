"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IEventData, IEventLimit } from "@/lib/types/event";

const eventService = new ApiService<IEventData[], IEventData>("/events");

const eventQueryService = new ApiService<IEventLimit, IEventData>("/events");

// mutation utility
function eventsMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (variables: T) => mutationCallback(variables, params),
    retry: 3,
  });
}

// query utility
function eventsQuery<B>(
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

const EventsAdapter = {
  getAllEvents: async function () {
    const res = await eventService.getAll("/");
    return res;
  },
  getEventsByLimit: async function (limit: number | string) {
    const res = await eventQueryService.getAll(`?limit=${limit}`);
    return res;
  },
  getEventDetails: async function (id: string | number) {
    const res = await eventService.getById(`${id}`);
    return res;
  },
  editEventDetails: async function (payload: any, params: string) {
    const res = await eventService.mutate(
      `${params}`,
      payload,
      "JSON",
      "PATCH"
    );
    return res;
  },
  deleteEvent: async function (id: string) {
    const res = await eventService.mutate(id, {}, "JSON", "DELETE");
  },
};

export { eventsMutation, eventsQuery, EventsAdapter };
