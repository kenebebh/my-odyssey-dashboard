import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, CalendarIcon, TagIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IEventData } from "@/lib/types/event";

interface EventCardProps {
  event: IEventData;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            quality={60}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{event.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPinIcon className="mr-2 h-4 w-4" />
          {event.country}
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {event.startDate}
        </div>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {event.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/all-events/${event.id}`}>View Event</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
