"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  {
    id: 5,
    name: "Diwali Festival",
    country: "India",
    date: "2023-11-12",
    description: "Festival of lights celebrated across India",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Rio Carnival",
    country: "Brazil",
    date: "2024-02-09",
    description: "Lively street festival in Rio de Janeiro",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Chinese New Year",
    country: "China",
    date: "2024-02-10",
    description: "Celebration of the lunar new year",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Edinburgh Fringe Festival",
    country: "Scotland",
    date: "2024-08-02",
    description: "Largest arts festival in the world",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "Holi Festival",
    country: "India",
    date: "2024-03-25",
    description: "Festival of colors celebrated in India",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    name: "Burning Man",
    country: "USA",
    date: "2024-08-25",
    description: "Cultural event in the Nevada desert",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
];

export default function AllEvents() {
  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-bold text-center mb-8">
        Update Events and Top Experiences for Destinations
      </h1> */}

      <section className="space-y-4">
        {/* <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Events</h2>
          <Link href="/all-events">
            <Button>View All Events</Button>
          </Link>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
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
                  <Button variant="outline" className="w-full">
                    View Event
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
