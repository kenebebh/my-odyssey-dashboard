"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  CalendarIcon,
  MapPinIcon,
  Clock,
  Ticket,
  Image as ImageIcon,
  X,
  PenSquare,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// Mock data for demonstration
const eventData = {
  name: "Summer Music Festival 2023",
  startDate: new Date("2023-08-15"),
  endDate: new Date("2023-08-15"),
  country: "United States",
  description:
    "A three-day music extravaganza featuring top artists from around the world.",
  image: "/placeholder.svg",
  status: "Active",
  location: "Central Park, New York City",
  startTime: "12:00",
  endTime: "23:00",
  ticketPrice: "150",
  ticketAvailability: "Available",
  gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  ads: ["Summer Sale Ad", "Event Promo Ad"],
  adStatus: "Running",
};

// export default function EditEventForm({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
export default function EditEventForm() {
  const [startDate, setStartDate] = useState<Date | undefined>(
    eventData.startDate
  );
  const [endDate, setEndDate] = useState<Date | undefined>(eventData.endDate);
  const [gallery, setGallery] = useState(eventData.gallery);
  const [ads, setAds] = useState(eventData.ads);
  const [adStatus, setAdStatus] = useState(eventData.adStatus);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const onClose = () => setIsEditDialogOpen(false);

  const removeImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  const removeAd = (index: number) => {
    const newAds = ads.filter((_, i) => i !== index);
    setAds(newAds);
    if (newAds.length === 0) {
      setAdStatus("Paused");
    }
  };

  return (
    <Dialog
    //  open={isOpen} onOpenChange={onClose}
    >
      <DialogTrigger asChild>
        <Button variant="outline">
          <PenSquare className="mr-2 h-4 w-4" />
          Edit Event
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Make changes to your event here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Event Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-name">Event Name</Label>
                <Input id="event-name" defaultValue={eventData.name} />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? (
                        format(startDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(newDate) => {
                        setStartDate(newDate);
                        onClose();
                      }}
                      initialFocus
                      captionLayout="dropdown-buttons"
                      fromYear={2024}
                      toYear={2024}
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select defaultValue={eventData.country}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="United Kingdom">
                      United Kingdom
                    </SelectItem>
                    <SelectItem value="France">France</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue={eventData.description}
                />
              </div>
              <div className="space-y-2">
                <Label>Event Image</Label>
                <div className="flex items-center space-x-4">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden">
                    <Image
                      src={eventData.image}
                      alt="Event image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <Button type="button">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Update Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue={eventData.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Ongoing">Ongoing</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Details & Logistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue={eventData.location} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time</Label>
                  <Input
                    id="start-time"
                    type="time"
                    defaultValue={eventData.startTime}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <Input
                    id="end-time"
                    type="time"
                    defaultValue={eventData.endTime}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tickets & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ticket-price">Ticket Price</Label>
                <Input
                  id="ticket-price"
                  type="number"
                  defaultValue={eventData.ticketPrice}
                />
              </div>
              <div className="space-y-2">
                <Label>Ticket Availability</Label>
                <Select defaultValue={eventData.ticketAvailability}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Sold Out">Sold Out</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label>Media Gallery</Label>
                <div className="grid grid-cols-3 gap-4">
                  {gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-32 rounded-md overflow-hidden group"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button type="button" className="mt-4">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Add Media
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advertisement Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Associated Ads</h3>
                <div className="flex flex-wrap gap-2">
                  {ads.map((ad, index) => (
                    <Badge key={index} className="pr-1.5">
                      {ad}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 ml-2"
                        onClick={() => removeAd(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label>Ad Status</Label>
                <Select value={adStatus} onValueChange={setAdStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ad status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Running">Running</SelectItem>
                    <SelectItem value="Paused">Paused</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
