"use client";

import { experiencesQuery, TopExperienceAdapter } from "@/adapters";
import { ITopExperiences } from "@/lib/types/experiences";
import { GoBackButton } from "@/components/helpers";
import { DisplayErrorMessage } from "@/utils/displayErrorMessage";
import { ExperienceCard } from "@/components/events-experiences";

export default function AllTopExperiences() {
  const { data, isError, isLoading, errorMessage, refetch } =
    experiencesQuery<ITopExperiences>(
      TopExperienceAdapter.getAllExperiences,
      ["allExperiences"],
      ""
    );

  const experiences = data?.data;
  // console.log(experiences);

  if (isError) {
    return (
      <DisplayErrorMessage
        message={errorMessage || "An error occured while fetching events."}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="items-center justify-between flex">
        <GoBackButton />
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center mr-24">
            All Top Experiences
          </h1>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full text-center mt-8">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <section className="space-y-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
            {experiences?.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
