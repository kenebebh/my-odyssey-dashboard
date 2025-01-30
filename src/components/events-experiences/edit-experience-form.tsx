import { IExperience } from "@/lib/types/experiences";
import React from "react";
import { Button } from "../ui/button";

export default function EditExperienceForm({
  experienceData,
}: {
  experienceData: IExperience;
}) {
  return <Button variant={"outline"}>Edit Experience Form</Button>;
}
