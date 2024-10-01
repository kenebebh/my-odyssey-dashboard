"use client";

import React from "react";
import { usersQuery, UsersAdapter } from "@/adapters";
import { IUser } from "@/lib/types/user";

export default function UserDetailsPage({ userID }: { userID: string }) {
  const {
    data: user,
    isError,
    error,
  } = usersQuery<IUser>(UsersAdapter.getUserDetails, ["user", userID], userID);

  console.log(user);

  return (
    <div>
      <div>
        <section className="overflow-hidden w-28 h-28 sm:w-[150px] sm:h-[150px] rounded-full">
          <img src={user?.userImage} className="object-cover object-center" />
        </section>
        <section className="border rounded-lg overflow-hidden">
          <div className="bg-neutral-300 py-3 px-2 pl-4">
            <h2>Personal Information</h2>
          </div>
          <div className="flex flex-wrap px-2 gap-x-12">
            <div className="flex flex-col gap-y-2 w-fit justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Name</p>
              <p className="basis-3/4 text-slate-800">{user?.username}</p>
            </div>

            <div className="flex flex-col gap-y-2 w-fit justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Email Address</p>
              <p className="basis-3/4 text-slate-800">{user?.email}</p>
            </div>

            <div className="flex flex-col gap-y-2 w-fit justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Verification Status</p>
              <p className="basis-3/4 text-slate-800">
                {user?.verified ? (
                  <span className="text-green-400">Verified</span>
                ) : (
                  <span className="text-red-400">Not Verified</span>
                )}
              </p>
            </div>

            <div className="flex flex-col gap-y-2 w-fit justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Account Status</p>
              <p className="basis-3/4 text-slate-800">
                {user?.deactivated ? (
                  <span className="text-red-400">Deactivated</span>
                ) : (
                  <span className="text-green-400">Active</span>
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
