import React from "react";
import Link from "next/link";

import { links } from "@/data/links";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  return (
    <div className="w-60 border-r h-screen overflow-auto py-3 pb-4 px-3">
      <div className="pb-3">
        <h1 className="font-sans text-3xl text-primaryColor italic">
          My Odyssey
        </h1>
      </div>

      <div>
        <Link href="/">
          <section className="flex items-center gap-x-2 py-1">
            <section className="border border-{#fff] rounded-full p-1">
              <DashboardIcon color="#0077B6" />
            </section>
            <p className="uppercase font-medium">Dashboard</p>
          </section>
        </Link>
        {links.map((item) => {
          return (
            <div>
              <section className="flex items-center gap-x-2 py-1">
                <section className="border border-{#fff] rounded-full p-1">
                  {item.icon}
                </section>
                <p className="uppercase font-medium">{item.title}</p>
              </section>
              <section className="pl-8 pb-2">
                {item.links?.map((link) => (
                  <p>
                    <Link
                      href={`${link.href}`}
                      className="border-l-2 mb-1.5 pl-1"
                    >
                      {link.name}
                    </Link>
                  </p>

                  // <p className="border-l-2 mb-1.5 pl-1 ">{link.name}</p>
                ))}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
