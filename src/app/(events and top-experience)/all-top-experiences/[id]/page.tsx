"use client";

import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiencesQuery, TopExperienceAdapter } from "@/adapters";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  Star,
  User,
  Tag,
  ImageIcon,
  BarChart2,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import type { IExperienceData } from "@/lib/types/experiences";
import { EditExperienceForm } from "@/components/events-experiences";
import { GoBackButton } from "@/components/helpers";
import { DisplayErrorMessage } from "@/utils/displayErrorMessage";

export default function TopExperienceDetails({
  params,
}: {
  params: { id: string };
}) {
  const experienceID = params.id;

  const { data, isError, isLoading, errorMessage, refetch } =
    experiencesQuery<IExperienceData>(
      TopExperienceAdapter.getExperienceDetails,
      ["experience", experienceID],
      experienceID
    );

  const ExperienceDetails = data?.experience;

  if (isError) {
    return (
      <DisplayErrorMessage
        message={errorMessage || "An error occured while fetching events."}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <GoBackButton />
        <h1 className="text-3xl font-bold">Experience Details</h1>
        <div className="space-x-2 flex items-center">
          {ExperienceDetails && (
            <EditExperienceForm experienceData={ExperienceDetails} />
          )}
          <Button variant="destructive">Delete Experience</Button>
        </div>
      </div>
      {isLoading ? (
        <div className="w-full text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Experience Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Experience Name</h3>
                    <p className="text-xl">{ExperienceDetails?.name}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Country</h3>
                    <p className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4" />
                      {ExperienceDetails?.country}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Type</h3>
                    <Badge>{ExperienceDetails?.type}</Badge>
                  </div>
                  <div>
                    <h3 className="font-bold">Description</h3>
                    <p>{ExperienceDetails?.description}</p>
                  </div>
                </div>

                <div className="">
                  <h3 className="font-bold mb-2">Experience Images</h3>
                  <div className="relative h-72 w-full rounded-md overflow-hidden">
                    {ExperienceDetails?.image && (
                      <Image
                        src={ExperienceDetails.image || "/placeholder.svg"}
                        alt="Experience image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Ratings & Votes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Average Rating</h3>
                  <p className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-400" />
                    {ExperienceDetails?.ratings ? (
                      <>
                        {ExperienceDetails.ratings.average.toFixed(1)} (
                        {ExperienceDetails.ratings.totalVotes} votes)
                      </>
                    ) : (
                      "No ratings yet"
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">User Votes</h3>
                  <p className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {ExperienceDetails?.votes ?? "No votes"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {ExperienceDetails?.tags ? (
                  <div>
                    {ExperienceDetails?.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p>No tags provided</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Metrics & Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <BarChart2 className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {ExperienceDetails?.votes ?? 0}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Total Votes
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <MessageSquare className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {ExperienceDetails?.ratings
                      ? ExperienceDetails.ratings.average.toFixed(1)
                      : "N/A"}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Average Rating
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <User className="h-8 w-8 mb-2" />
                  <span className="text-2xl font-bold">
                    {ExperienceDetails?.ratings
                      ? ExperienceDetails.ratings.totalVotes
                      : 0}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Total Ratings
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
