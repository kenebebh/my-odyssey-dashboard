import React from "react";

export default function EventDetails({ params }: { params: { id: string } }) {
  return <div>event{params.id}</div>;
}
