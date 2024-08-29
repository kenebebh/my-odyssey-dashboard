"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

import { links } from "@/data/links";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  const pathname = usePathname();

  const activeLinkStyles = "mb-1.5 pl-1 bg-primaryColor hover:text-white";

  // Function to determine if the link is active
  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-60 border-r h-screen overflow-auto py-3 pb-4 px-3">
      <div className="pb-3">
        <h1 className="font-sans text-3xl text-primaryColor italic">
          My Odyssey
        </h1>
      </div>

      <div>
        <Link
          href="/"
          //   className={`rounded-sm shadow-md ${
          //     isActive("/") ? activeLinkStyles : "hover:text-primaryColor/90"
          //   }`}
        >
          <section
            className={`flex items-center gap-x-2 pl-0.5 py-1 rounded-sm shadow-md ${
              isActive("/")
                ? "bg-primaryColor hover:text-white pl-0.5"
                : "hover:text-primaryColor/90"
            }`}
          >
            <section className="border border-[#ec9d9dc4] rounded-full p-1">
              <DashboardIcon color={isActive("/") ? "#fff " : "#0077B6"} />
            </section>
            <p
              className={`uppercase font-medium ${
                isActive("/") ? "text-white" : ""
              }`}
            >
              Dashboard
            </p>
          </section>
        </Link>
        {links.map((item) => {
          return (
            <div>
              <section className="flex items-center gap-x-2 py-1 pl-0.5">
                <section className="border border-[#ec9d9dc4] rounded-full p-1">
                  {item.icon}
                </section>
                <p className="uppercase font-medium">{item.title}</p>
              </section>
              <section className="pl-8 pb-2">
                {item.links?.map((link) => (
                  <Link
                    href={`${link.href}`}
                    className={`border-l-2 mb-1.5 pl-1 flex items-center rounded-sm shadow-md hover:text-primaryColor/90 ${
                      pathname === link.href ? activeLinkStyles : ""
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
