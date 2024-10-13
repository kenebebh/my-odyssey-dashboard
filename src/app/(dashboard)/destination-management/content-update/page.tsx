"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon } from "lucide-react";
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

// Mock data for demonstration
const events = [
  {
    id: 1,
    name: "Paris Fashion Week",
    country: "France",
    date: "2023-09-25",
    description: "Annual fashion event in Paris",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Tokyo Game Show",
    country: "Japan",
    date: "2023-09-21",
    description: "Video game expo in Tokyo",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Oktoberfest",
    country: "Germany",
    date: "2023-09-16",
    description: "Beer festival in Munich",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "New York Film Festival",
    country: "USA",
    date: "2023-09-29",
    description: "Film screenings in New York City",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {events.map((event) => (
            <Link href={`/all-events/${event.id}`} key={event.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">{event.name}</h3>
                  <p className="flex items-center text-sm text-gray-600 mb-1">
                    <MapPinIcon className="mr-2 h-4 w-4" />
                    {event.country}
                  </p>
                  <p className="flex items-center text-sm text-gray-600 mb-2">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {event.date}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    {event.description}
                  </p>
                  {/* <Link href={`/local-events/${event.id}`}> */}
                  <Button variant="outline" className="w-full">
                    View Event
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </Link>
          ))}
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
