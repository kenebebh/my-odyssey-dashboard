// "use client";

// import React from "react";
// import { usersQuery, UsersAdapter } from "@/adapters";
// import { IUser } from "@/lib/types/user";

// export default function UserDetailsPage({ userID }: { userID: string }) {
//   const {
//     data: user,
//     isError,
//     error,
//   } = usersQuery<IUser>(UsersAdapter.getUserDetails, ["user", userID], userID);

//   const userName = user?.username ?? ""; // userName will be an empty string if userName is undefined
//   const [firstName, lastName] = userName.split(" ");

//   return (
//     <div className="flex flex-col gap-y-12">
//       <div className="flex gap-x-12">
//         <section className="overflow-hidden w-52 h-52 sm:w-[200px] sm:h-[200px] rounded-full">
//           <img src={user?.userImage} className="object-cover object-center" />
//         </section>
//         <section className="border rounded-lg overflow-hidden min-w-[30rem]">
//           <div className="bg-neutral-300 py-3 px-2 pl-4">
//             <h2>Personal Information</h2>
//           </div>
//           <div className="grid grid-cols-2 gap-x-4 auto-rows-auto px-4">
//             <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
//               <p className="basis-1/4 font-medium">First Name</p>
//               <p className="basis-3/4 text-slate-800">{firstName}</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Last Name</p>
//               <p className="basis-3/4 text-slate-800">{lastName}</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
//               <p className="basis-1/4 font-medium">Gender</p>
//               <p className="basis-3/4 text-slate-800">Female</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Date of Birth</p>
//               <p className="basis-3/4 text-slate-800">26th July, 2002</p>
//             </div>

//             {/* <div className="flex flex-col gap-y-2 w-full justify-between border-b border-r border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Verification Status</p>
//               <p className="basis-3/4 text-slate-800">
//                 {user?.verified ? (
//                   <span className="text-green-400">Verified</span>
//                 ) : (
//                   <span className="text-red-400">Not Verified</span>
//                 )}
//               </p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Account Status</p>
//               <p className="basis-3/4 text-slate-800">
//                 {user?.deactivated ? (
//                   <span className="text-red-400">Deactivated</span>
//                 ) : (
//                   <span className="text-green-400">Active</span>
//                 )}
//               </p>
//             </div> */}
//           </div>
//         </section>
//       </div>
//       <div>
//         <section className="border rounded-lg overflow-hidden">
//           <div className="bg-neutral-300 py-3 px-2 pl-4">
//             <h2>Contact Information</h2>
//           </div>
//           <div className="grid grid-cols-3 gap-x-4 auto-rows-auto px-4">
//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Email Address</p>
//               <p className="basis-3/4 text-slate-800">{user?.email}</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
//               <p className="basis-1/4 font-medium">Phone</p>
//               <p className="basis-3/4 text-slate-800">08148531411</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Address</p>
//               <p className="basis-3/4 text-slate-800">
//                 Ekeki Housing Estate, Yenagoa, Bayelsa State
//               </p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">City</p>
//               <p className="basis-3/4 text-slate-800">Yenagoa</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
//               <p className="basis-1/4 font-medium">Country</p>
//               <p className="basis-3/4 text-slate-800">{user?.location}</p>
//             </div>

//             <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
//               <p className="basis-1/4 font-medium">Address</p>
//               <p className="basis-3/4 text-slate-800">
//                 Ekeki Housing Estate, Yenagoa, Bayelsa State
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// "use client";

// import React from "react";
// import { usersQuery, UsersAdapter } from "@/adapters";
// import { IUser } from "@/lib/types/user";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   CalendarIcon,
//   MapPinIcon,
//   PhoneIcon,
//   MailIcon,
//   HomeIcon,
//   GlobeIcon,
//   ClockIcon,
//   UserIcon,
//   PlaneIcon,
//   HeartIcon,
//   TicketIcon,
//   StarIcon,
// } from "lucide-react";

// export default function UserDetailsPage({ userID }: { userID: string }) {
//   const {
//     data: user,
//     isError,
//     error,
//   } = usersQuery<IUser>(UsersAdapter.getUserDetails, ["user", userID], userID);

//   const userName = user?.username ?? "";
//   const [firstName, lastName] = userName.split(" ");

//   if (isError) {
//     return <div>Error: {error?.message}</div>;
//   }

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-1/3">
//           <Card>
//             <CardHeader className="text-center">
//               <Avatar className="w-32 h-32 mx-auto">
//                 <AvatarImage src={user.userImage} alt={userName} />
//                 <AvatarFallback>
//                   {firstName[0]}
//                   {lastName[0]}
//                 </AvatarFallback>
//               </Avatar>
//               <CardTitle className="mt-4">{userName}</CardTitle>
//               <div className="flex justify-center space-x-2 mt-2">
//                 <Badge variant={user.verified ? "default" : "secondary"}>
//                   {user.verified ? "Verified" : "Not Verified"}
//                 </Badge>
//                 <Badge variant={user.deactivated ? "destructive" : "default"}>
//                   {user.deactivated ? "Deactivated" : "Active"}
//                 </Badge>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <MailIcon className="mr-2 h-4 w-4" />
//                   <span>{user.email}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <PhoneIcon className="mr-2 h-4 w-4" />
//                   <span>08148531411</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPinIcon className="mr-2 h-4 w-4" />
//                   <span>Ekeki Housing Estate, Yenagoa, Bayelsa State</span>
//                 </div>
//                 <div className="flex items-center">
//                   <GlobeIcon className="mr-2 h-4 w-4" />
//                   <span>{user.location}</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="md:w-2/3">
//           <Tabs defaultValue="personal" className="w-full">
//             <TabsList>
//               <TabsTrigger value="personal">Personal Info</TabsTrigger>
//               <TabsTrigger value="activity">App Activity</TabsTrigger>
//               <TabsTrigger value="engagement">Engagement</TabsTrigger>
//               <TabsTrigger value="other">Other Info</TabsTrigger>
//             </TabsList>
//             <TabsContent value="personal">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Personal Information</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="font-medium">First Name</p>
//                       <p>{firstName}</p>
//                     </div>
//                     <div>
//                       <p className="font-medium">Last Name</p>
//                       <p>{lastName}</p>
//                     </div>
//                     <div>
//                       <p className="font-medium">Gender</p>
//                       <p>Female</p>
//                     </div>
//                     <div>
//                       <p className="font-medium">Date of Birth</p>
//                       <p>26th July, 2002</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="activity">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>App Interaction & Activity</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <CalendarIcon className="mr-2 h-4 w-4" /> Account
//                         Creation Date
//                       </p>
//                       <p>January 15, 2023</p>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <ClockIcon className="mr-2 h-4 w-4" /> Last Login Date
//                       </p>
//                       <p>July 1, 2023</p>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <PlaneIcon className="mr-2 h-4 w-4" /> Total Saved Trips
//                       </p>
//                       <p>12</p>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <PlaneIcon className="mr-2 h-4 w-4" /> Booked Trips
//                       </p>
//                       <ul className="list-disc list-inside">
//                         <li>Paris, France (August 10-17, 2023)</li>
//                         <li>Tokyo, Japan (October 5-15, 2023)</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <PlaneIcon className="mr-2 h-4 w-4" /> Travel History
//                       </p>
//                       <ul className="list-disc list-inside">
//                         <li>Rome, Italy (May 1-8, 2023)</li>
//                         <li>New York, USA (December 20-27, 2022)</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <HeartIcon className="mr-2 h-4 w-4" /> Saved Wishlists
//                       </p>
//                       <ul className="list-disc list-inside">
//                         <li>Bali, Indonesia</li>
//                         <li>Santorini, Greece</li>
//                         <li>Machu Picchu, Peru</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="engagement">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Engagement Metrics</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <ClockIcon className="mr-2 h-4 w-4" /> Average Session
//                         Duration
//                       </p>
//                       <p>25 minutes</p>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <UserIcon className="mr-2 h-4 w-4" /> Activity Status
//                       </p>
//                       <Badge>Active</Badge>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <PlaneIcon className="mr-2 h-4 w-4" /> Frequent Travel
//                         Interests
//                       </p>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         <Badge variant="secondary">Budget Travel</Badge>
//                         <Badge variant="secondary">Adventure</Badge>
//                         <Badge variant="secondary">Cultural Experiences</Badge>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <GlobeIcon className="mr-2 h-4 w-4" /> Preferred
//                         Destinations
//                       </p>
//                       <ul className="list-disc list-inside">
//                         <li>Japan</li>
//                         <li>Italy</li>
//                         <li>Thailand</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="other">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Other Information</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <TicketIcon className="mr-2 h-4 w-4" /> Support Tickets
//                       </p>
//                       <p>2 tickets submitted</p>
//                       <ul className="list-disc list-inside mt-2">
//                         <li>Booking issue (Resolved)</li>
//                         <li>Payment problem (In Progress)</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="font-medium flex items-center">
//                         <StarIcon className="mr-2 h-4 w-4" /> App Ratings
//                       </p>
//                       <p>4.5 / 5 stars (2 ratings submitted)</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// }

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
} from "lucide-react";

export default function UserDetailsPage({ userID }: { userID: string }) {
  const {
    data: user,
    isError,
    error,
  } = usersQuery<IUser>(UsersAdapter.getUserDetails, ["user", userID], userID);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const userName = user.username ?? "";
  const [firstName, lastName] = userName.split(" ");

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={user.userImage} alt={userName} />
              <AvatarFallback>
                {firstName[0]}
                {lastName[0]}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-2">{userName}</h2>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <p className="font-medium">First Name</p>
                <p>{firstName}</p>
              </div>
              <div>
                <p className="font-medium">Last Name</p>
                <p>{lastName}</p>
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
                <p>{user.location || "Not specified"}</p>
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
