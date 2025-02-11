"use client";

import { useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IEvent, IEventData, IEventLimit, IEvents } from "@/lib/types/event";
import { queryWithErrorHandling } from "@/hooks/queryWithErrorHandling";

const eventService = new ApiService<IEvents, IEventData>("/events");

const eventQueryService = new ApiService<IEventLimit, IEvent>("/events");

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

function eventsQuery<TData = IEvents | IEventData>(
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

// Interface for the EventsAdapter
interface IEventsAdapter {
  getAllEvents: () => Promise<IEvents>;
  getEventsByLimit: (limit: number | string) => Promise<IEventLimit>;
  getEventDetails: (id: string | number) => Promise<IEventData>;
  editEventDetails: (payload: any, params: string) => Promise<any>;
  deleteEvent: (id: string) => Promise<void>;
}

const EventsAdapter: IEventsAdapter = {
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
