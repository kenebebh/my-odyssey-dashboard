"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { eventsQuery, EventsAdapter } from "@/adapters";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  MapPinIcon,
  Clock,
  Ticket,
  Image as ImageIcon,
  BarChart2,
  MessageSquare,
  PenSquare,
} from "lucide-react";
import Image from "next/image";
import { IEventData } from "@/lib/types/event";
import { EditEventForm } from "@/components/events-experiences";
import { DateFormatter, GoBackButton } from "@/components/helpers";

export default function EventDetails({ params }: { params: { id: string } }) {
  const eventID = params.id;

  const {
    data: EventDetails,
    isError,
    error,
    isLoading,
  } = eventsQuery<IEventData>(
    EventsAdapter.getEventDetails,
    ["event", eventID],
    eventID
  );
  console.log(EventDetails);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <GoBackButton />
        <h1 className="text-3xl font-bold">Event Details</h1>
        <div className="space-x-2 flex items-center">
          {EventDetails && <EditEventForm eventData={EventDetails} />}
          <Button variant="destructive">Delete Event</Button>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Event Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Event Name</h3>
                    <p className="text-xl">{EventDetails?.name}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <h3 className="font-bold">Start Date</h3>
                      <p className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {EventDetails?.startDate ? (
                          <DateFormatter dateString={EventDetails?.startDate} />
                        ) : (
                          "Not available"
                        )}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">End Date</h3>
                      <p className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {EventDetails?.endDate ? (
                          <DateFormatter dateString={EventDetails?.endDate} />
                        ) : (
                          "Not available"
                        )}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Country</h3>
                    <p>{EventDetails?.country}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Description</h3>
                    <p>{EventDetails?.description}</p>
                  </div>
                </div>

                <div className="">
                  <h3 className="font-bold mb-2">Event Image</h3>
                  <div className="relative h-72 w-full rounded-md overflow-hidden">
                    <Image
                      src={EventDetails?.image ? EventDetails?.image : ""}
                      alt="Event image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-auto"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Event Details & Logistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="flex items-center">
                    <MapPinIcon className="mr-2 h-4 w-4" />
                    {EventDetails?.location}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Event Status</h3>
                  <Badge
                    variant={
                      EventDetails?.status === "Active"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {EventDetails?.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold">Start Time</h3>
                  <p className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {EventDetails?.startTime}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">End Time</h3>
                  <p className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {EventDetails?.endTime}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tickets & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold">Ticket Price</h3>
                <p className="flex items-center">
                  <Ticket className="mr-2 h-4 w-4" />
                  {EventDetails?.ticketPrice}
                </p>
              </div>
              <div>
                <h3 className="font-bold">Ticket Availability</h3>
                <Badge
                  variant={
                    EventDetails?.ticketAvailability === "Available"
                      ? "default"
                      : "secondary"
                  }
                >
                  {EventDetails?.ticketAvailability}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Event Content</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold mb-2">Media Gallery</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {EventDetails?.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-60 rounded-md overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-auto h-auto"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Advertisement Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold">Associated Ads</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {EventDetails?.ads.map((ad, index) => (
                    <Badge key={index}>{ad}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold">Ad Status</h3>
                <Badge
                  variant={
                    EventDetails?.adStatus === "Running"
                      ? "default"
                      : "secondary"
                  }
                >
                  {EventDetails?.adStatus}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Metrics & Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <BarChart2 className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {EventDetails?.metrics.attendees}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Attendees
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <MessageSquare className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {EventDetails?.metrics.rating}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    User Rating
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <Clock className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {EventDetails?.metrics.impressions}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Impressions
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <Ticket className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {EventDetails?.metrics.ticketsBooked}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Tickets Booked
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
