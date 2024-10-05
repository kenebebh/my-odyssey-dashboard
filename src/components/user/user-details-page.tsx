"use client";

import React from "react";
import { usersQuery, UsersAdapter } from "@/adapters";
import { IUser } from "@/lib/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  TicketIcon,
  StarIcon,
  Pencil,
} from "lucide-react";
import EditUserForm from "./edit-user-form";

export default function UserDetailsPage({ userID }: { userID: string }) {
  const {
    data: user,
    isError,
    error,
  } = usersQuery<IUser>(UsersAdapter.getUserDetails, ["user", userID], userID);

  // console.log(user);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(
    0
  )}`.toUpperCase();

  return (
    <div className="container mx-auto p-6 pt-2 space-y-6">
      <div className="flex justify-end">
        <EditUserForm {...user} />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/3">
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={user.userImage} alt={initials} />
              <AvatarFallback>
                {user.firstName}
                {user.lastName}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-2">{fullName}</h2>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <p className="font-medium">First Name</p>
                <p>{user.firstName}</p>
              </div>
              <div>
                <p className="font-medium">Last Name</p>
                <p>{user.lastName}</p>
              </div>
              <div>
                <p className="font-medium">Gender</p>
                <p>{user.gender || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Date of Birth</p>
                <p>{user.dateOfBirth || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Verification Status</p>
                <Badge variant={user.verified ? "secondary" : "destructive"}>
                  {user.verified ? "Verified" : "Not Verified"}
                </Badge>
              </div>
              <div>
                <p className="font-medium">Account Status</p>
                <Badge variant={user.deactivated ? "destructive" : "secondary"}>
                  {user.deactivated ? "Deactivated" : "Active"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Email Address</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p>{user.phone || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>{user.address || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">City</p>
                <p>{user.city || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Country</p>
                <p>{user.country || "Not specified"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>App Interaction & Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="font-medium flex items-center">
                <CalendarIcon className="mr-2" /> Account Creation Date
              </p>
              <p>{user.createdAt || "Not available"}</p>
            </div>
            <div>
              <p className="font-medium flex items-center">
                <ClockIcon className="mr-2" /> Last Login Date
              </p>
              <p>{user.lastLoginDate || "Not available"}</p>
            </div>
            <div>
              <p className="font-medium">Total Saved Trips</p>
              <p>{user.savedTripsCount || 0}</p>
            </div>
            <div>
              <p className="font-medium">Booked Trips</p>
              <ul className="list-disc list-inside">
                {user.bookedTrips?.map((trip, index) => (
                  <li key={index}>
                    {trip.destination} ({trip.date})
                  </li>
                )) || "No booked trips"}
              </ul>
            </div>
            <div>
              <p className="font-medium">Travel History</p>
              <ul className="list-disc list-inside">
                {user.travelHistory?.map((trip, index) => (
                  <li key={index}>
                    {trip.destination} ({trip.date})
                  </li>
                )) || "No travel history"}
              </ul>
            </div>
            <div>
              <p className="font-medium">Saved Wishlists</p>
              <ul className="list-disc list-inside">
                {user.savedWishlists?.map((item, index) => (
                  <li key={index}>{item.destination}</li>
                )) || "No saved wishlists"}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Average Session Duration</p>
              <p>{user.avgSessionDuration || "Not available"}</p>
            </div>
            <div>
              <p className="font-medium">Activity Status</p>
              <Badge
                variant={
                  user.activityStatus === "Active"
                    ? "secondary"
                    : user.activityStatus === "Inactive"
                    ? "destructive"
                    : "default"
                }
              >
                {user.activityStatus || "Not available"}
              </Badge>
            </div>
            <div>
              <p className="font-medium">Frequent Travel Interests</p>
              <div className="flex flex-wrap gap-2">
                {user.travelInterests?.map((interest, index) => (
                  <Badge key={index} variant="outline">
                    {interest}
                  </Badge>
                )) || "Not available"}
              </div>
            </div>
            <div>
              <p className="font-medium">Preferred Destinations</p>
              <div className="flex flex-wrap gap-2">
                {user.preferredDestinations?.map((destination, index) => (
                  <Badge key={index} variant="outline">
                    {destination}
                  </Badge>
                )) || "Not available"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TicketIcon className="mr-2" /> Support Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user.supportTickets?.length ? (
              <ul className="list-disc list-inside">
                {user.supportTickets.map((ticket, index) => (
                  <li key={index}>
                    {ticket.subject} - {ticket.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No support tickets submitted</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <StarIcon className="mr-2" /> App Ratings
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user.appRatings?.length ? (
              <ul className="list-disc list-inside">
                {user.appRatings.map((rating, index) => (
                  <li key={index}>
                    {rating.score}/5 - {rating.comment}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No app ratings submitted</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
