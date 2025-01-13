"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { eventsQuery, EventsAdapter } from "@/adapters";
import { IEventData, IEventLimit } from "@/lib/types/event";
import { Skeleton } from "@/components/ui/skeleton";

import Link from "next/link";
import Image from "next/image";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const topExperiences = [
  {
    id: 1,
    name: "Eiffel Tower Visit",
    country: "France",
    description: "Visit the iconic Eiffel Tower",
    image:
      "https://images.unsplash.com/photo-1727459740748-a0004bd98ed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxGem8zenVPSE42d3x8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Mount Fuji Hike",
    country: "Japan",
    description: "Hike Japan's highest mountain",
    image:
      "https://images.unsplash.com/photo-1727459740748-a0004bd98ed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxGem8zenVPSE42d3x8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Neuschwanstein Castle Tour",
    country: "Germany",
    description: "Tour the fairy-tale castle",
    image:
      "https://images.unsplash.com/photo-1727459740748-a0004bd98ed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxGem8zenVPSE42d3x8ZW58MHx8fHx8",
  },
  {
    id: 4,
    name: "Broadway Show",
    country: "USA",
    description: "Watch a show on Broadway",
    image:
      "https://images.unsplash.com/photo-1727459740748-a0004bd98ed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxGem8zenVPSE42d3x8ZW58MHx8fHx8",
  },
];

export default function Contentupdate() {
  const limit: number = 4;
  const {
    data: events,
    isError,
    error,
    isLoading,
  } = eventsQuery<IEventLimit>(
    EventsAdapter.getEventsByLimit,
    ["events", String(limit)],
    limit
  );

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  console.log(events?.data);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Update Events and Top Experiences for Destinations
      </h1>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Events</h2>
          <Link href="/all-events">
            <Button>View All Events</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-auto">
          {isLoading ? (
            <div>
              <div className="rounded-lg shadow-md">
                <div className="w-full">
                  <Skeleton className="h-40 w-full" />
                </div>
                <div className="p-4">
                  <Skeleton className="mb-2 w-full h-3" />
                  <Skeleton className="mb-1 w-full h-3" />
                  <Skeleton className="mb-2 w-full h-3" />

                  <Skeleton className="mt-4 w-full h-12" />
                </div>
              </div>
            </div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <>
              {events?.data.map((event) => (
                <Link href={`/all-events/${event.id}`} key={event.id}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1">
                    <div className="relative h-48 w-full">
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-auto h-auto"
                        placeholder="blur"
                        quality={60}
                        blurDataURL={rgbDataURL(10, 10, 10)}
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-y-1 justify-between h-full">
                      <section>
                        <h3 className="font-semibold text-xl mb-2">
                          {event.name}
                        </h3>
                        <p className="flex items-center text-sm text-gray-600 mb-1">
                          <MapPinIcon className="mr-2 h-4 w-4" />
                          {event.country}
                        </p>
                        <p className="flex items-center text-sm text-gray-600 mb-2">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {event.startDate}
                        </p>
                      </section>

                      <section>
                        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                          {event.description}
                        </p>
                      </section>

                      <Button variant="outline" className="w-full">
                        View Event
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Top Experiences</h2>
          <Link href="/all-top-experiences">
            <Button>View All Experiences</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topExperiences.map((experience) => (
            <Link
              href={`/all-top-experiences/${experience.id}`}
              key={experience.id}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={experience.image}
                    alt={experience.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-auto h-auto"
                    placeholder="blur"
                    quality={60}
                    blurDataURL={rgbDataURL(50, 50, 10)}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">
                    {experience.name}
                  </h3>
                  <p className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPinIcon className="mr-2 h-4 w-4" />
                    {experience.country}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    {experience.description}
                  </p>
                  {/* <Link href={`/top-experiences/${experience.id}`}> */}
                  <Button variant="outline" className="w-full">
                    View Experience
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
