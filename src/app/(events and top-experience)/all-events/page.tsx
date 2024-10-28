"use client";

import { Button } from "@/components/ui/button";
import { eventsQuery, EventsAdapter } from "@/adapters";
import { IEventData } from "@/lib/types/event";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GoBackButton } from "@/components/helpers";

export default function AllEvents() {
  const {
    data: events,
    isError,
    error,
    isLoading,
  } = eventsQuery<IEventData[]>(EventsAdapter.getAllEvents, ["allEvents"], "");

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(events);

  return (
    <div className="container mx-auto p-6">
      <div className="items-center justify-between flex">
        <GoBackButton />
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center mr-24">All Events</h1>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full text-center">Loading...</div>
      ) : (
        <section className="space-y-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
            {events?.map((event) => (
              <Link href={`/all-events/${event.id}`} key={event.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-xl mb-2">{event.name}</h3>
                    <p className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPinIcon className="mr-2 h-4 w-4" />
                      {event.country}
                    </p>
                    <p className="flex items-center text-sm text-gray-600 mb-2">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {event.startDate}
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                      {event.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      View Event
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
