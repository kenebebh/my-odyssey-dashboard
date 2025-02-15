"use client";

import React from "react";
import { TreePalm } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

import { items } from "@/data/links";

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
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 pr-2 py-4">
          <TreePalm className="h-8 w-8 text-theme flex-shrink-0" />
          <h1
            className={`font-sans text-2xl text-theme font-bold italic transition-all duration-300 ${
              state === "collapsed" ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            My Odyssey
          </h1>
        </div>
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
