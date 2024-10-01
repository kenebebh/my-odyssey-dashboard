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

  //   console.log(user);

  const userName = user?.username ?? ""; // userName will be an empty string if userName is undefined
  const [firstName, lastName] = userName.split(" ");

  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex gap-x-12">
        <section className="overflow-hidden w-52 h-52 sm:w-[200px] sm:h-[200px] rounded-full">
          <img src={user?.userImage} className="object-cover object-center" />
        </section>
        <section className="border rounded-lg overflow-hidden min-w-[30rem]">
          <div className="bg-neutral-300 py-3 px-2 pl-4">
            <h2>Personal Information</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 auto-rows-auto px-4">
            <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
              <p className="basis-1/4 font-medium">First Name</p>
              <p className="basis-3/4 text-slate-800">{firstName}</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Last Name</p>
              <p className="basis-3/4 text-slate-800">{lastName}</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
              <p className="basis-1/4 font-medium">Gender</p>
              <p className="basis-3/4 text-slate-800">Female</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Date of Birth</p>
              <p className="basis-3/4 text-slate-800">26th July, 2002</p>
            </div>

            {/* <div className="flex flex-col gap-y-2 w-full justify-between border-b border-r border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Verification Status</p>
              <p className="basis-3/4 text-slate-800">
                {user?.verified ? (
                  <span className="text-green-400">Verified</span>
                ) : (
                  <span className="text-red-400">Not Verified</span>
                )}
              </p>
            </div>

            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Account Status</p>
              <p className="basis-3/4 text-slate-800">
                {user?.deactivated ? (
                  <span className="text-red-400">Deactivated</span>
                ) : (
                  <span className="text-green-400">Active</span>
                )}
              </p>
            </div> */}
          </div>
        </section>
      </div>
      <div>
        <section className="border rounded-lg overflow-hidden">
          <div className="bg-neutral-300 py-3 px-2 pl-4">
            <h2>Contact Information</h2>
          </div>
          <div className="grid grid-cols-3 gap-x-4 auto-rows-auto px-4">
            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Email Address</p>
              <p className="basis-3/4 text-slate-800">{user?.email}</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
              <p className="basis-1/4 font-medium">Phone</p>
              <p className="basis-3/4 text-slate-800">08148531411</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Address</p>
              <p className="basis-3/4 text-slate-800">
                Ekeki Housing Estate, Yenagoa, Bayelsa State
              </p>
            </div>

            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">City</p>
              <p className="basis-3/4 text-slate-800">Yenagoa</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full border-b border-r border-slate-100 justify-between pb-5">
              <p className="basis-1/4 font-medium">Country</p>
              <p className="basis-3/4 text-slate-800">{user?.location}</p>
            </div>

            <div className="flex flex-col gap-y-2 w-full justify-between border-b border-slate-100 pb-5">
              <p className="basis-1/4 font-medium">Address</p>
              <p className="basis-3/4 text-slate-800">
                Ekeki Housing Estate, Yenagoa, Bayelsa State
              </p>
            </div>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
}
