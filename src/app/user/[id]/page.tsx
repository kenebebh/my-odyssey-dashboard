import React from "react";
import { UserDetailsPage } from "@/components/user";

export default function UserDetails({ params }: { params: { id: string } }) {
  return <UserDetailsPage userID={params.id} />;
}
