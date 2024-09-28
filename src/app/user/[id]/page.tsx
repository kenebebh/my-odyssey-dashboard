import React from "react";

export default function UserDetails({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>User {params.id}</p>
    </div>
  );
}
