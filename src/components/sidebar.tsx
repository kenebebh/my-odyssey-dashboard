"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

import { links } from "@/data/links";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  const pathname = usePathname();

  const activeLinkStyles =
    "mb-1.5 pl-1 bg-theme/80 text-[#f1f1ee] shadow-sm rounded-r";

  // Function to determine if the link is active
  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed w-60 border-r overflow-y-scroll h-screen  py-3 pb-4 px-3">
      <div className="pb-3">
        <h1 className="font-sans text-3xl text-theme italic">My Odyssey</h1>
      </div>

      <div>
        <Link href="/">
          <section
            className={`flex items-center gap-x-2 pl-0.5 py-1 rounded-sm ${
              isActive("/") ? "bg-theme/80 shadow-sm" : ""
            }`}
          >
            <section className="border border-[#ec9d9dc4] rounded-full p-1">
              <DashboardIcon color={isActive("/") ? "#fff" : "#0077B6"} />
            </section>
            <p
              className={`uppercase font-medium ${
                isActive("/") ? "text-[#f1f1ee]" : ""
              }`}
            >
              Dashboard
            </p>
          </section>
        </Link>
        {links.map((item, index) => {
          return (
            <div key={item.title}>
              <section className="flex items-center gap-x-2 py-1 pl-0.5">
                <section className="border border-[#ec9d9dc4] rounded-full p-1">
                  {item.icon}
                </section>
                <p className="uppercase font-medium">{item.title}</p>
              </section>
              <section className="pl-8 pb-2">
                {item.links?.map((link) => (
                  <Link
                    key={link.name}
                    href={`${link.href}`}
                    className={`border-l-2 border-accentGrey mb-1.5 pl-1 flex items-center  ${
                      pathname === link.href
                        ? activeLinkStyles
                        : "hover:text-theme/90"
                    }`}
                  >
                    <p className="">{link.name}</p>
                  </Link>

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
