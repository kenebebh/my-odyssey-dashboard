import React from "react";

export default function TopExperienceDetails({
  params,
}: {
  params: { id: string };
}) {
  return <div>experience {params.id}</div>;
}
