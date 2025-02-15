"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

import { items } from "@/data/links";
import { DashboardIcon } from "@radix-ui/react-icons";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const activeLinkStyles =
    "mb-1.5 pl-1 bg-theme/80 text-[#f1f1ee] shadow-sm rounded-r";

  // Function to determine if the link is active
  const isActive = (href: string) => pathname === href;

  // Function to determine if the link is active
  // const isActive = (href: string) => {
  //   if (pathname === href) return true;

  //   // Special case for User Management: Any URL starting with /user should be treated as active under "All Users"
  //   if (pathname.startsWith("/user") && href === "/user-management/all-users")
  //     return true;

  //   return false; // Default case: not active
  // };

  // console.log(pathname);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className="font-sans text-3xl text-theme font-bold italic">
          My Odyssey
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
