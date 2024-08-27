import React from "react";
import { links } from "../../data/links";
import { Sidebar } from "@/components";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className="flex gap-x-4">
      <Sidebar />

      <div>{children}</div>
    </section>
  );
}
