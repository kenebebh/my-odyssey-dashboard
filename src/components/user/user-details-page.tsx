"use client";

import React from "react";
import { usersQuery, UsersAdapter } from "@/adapters";
import { IUser } from "@/lib/types/user";

export default function UserDetailsPage({ userID }: { userID: string }) {
  const { data, isError, error } = usersQuery<IUser>(
    UsersAdapter.getUserDetails,
    ["user", userID],
    userID
  );

  console.log(data);

  return <div>{userID}</div>;
}
