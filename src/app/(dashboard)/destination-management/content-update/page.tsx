"use client";

import { Button } from "@/components/ui/button";
import {
  eventsQuery,
  EventsAdapter,
  experiencesQuery,
  TopExperienceAdapter,
} from "@/adapters";
import { IEventLimit } from "@/lib/types/event";
import { ILimitedExperiences } from "@/lib/types/experiences";
import { Skeleton } from "@/components/ui/skeleton";
import { EventCard, ExperienceCard } from "@/components/events-experiences";

import Link from "next/link";

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

export default function Contentupdate() {
  const limit: number = 4;

  const {
    data: events,
    isError,
    isLoading,
    errorMessage,
  } = eventsQuery<IEventLimit>(
    EventsAdapter.getEventsByLimit,
    ["events", String(limit)],
    limit
  );
  // console.log(events?.data);

  const {
    data: experiences,
    isError: isErrorExperience,
    isLoading: loadingExperience,
    errorMessage: experiencesError,
  } = experiencesQuery<ILimitedExperiences>(
    TopExperienceAdapter.getLimitedExperiences,
    ["top-experiences", String(limit)],
    limit
  );

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
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg shadow-md">
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
            ))
          ) : isError ? (
            <div className="container mx-auto p-6 text-red-500">
              Error: {errorMessage}
            </div>
          ) : (
            <>
              {events?.data.map((event) => (
                <Link href={`/all-events/${event.id}`} key={event.id}>
                  <EventCard key={event.id} event={event} />
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
          {loadingExperience ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg shadow-md">
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
            ))
          ) : isErrorExperience ? (
            <div>Error: {experiencesError}</div>
          ) : (
            <>
              {experiences?.data.map((experience) => (
                <Link
                  href={`/all-top-experiences/${experience.id}`}
                  key={experience.id}
                >
                  <ExperienceCard key={experience.id} experience={experience} />
                </Link>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
