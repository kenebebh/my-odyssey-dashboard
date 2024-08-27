import React from "react";
import { links } from "@/data/links";

export default function Sidebar() {
  return (
    <div className="w-1/6 border-r">
      {links.map((link) => {
        return (
          <div>
            {link.icon} {link.title}
          </div>
        );
      })}
    </div>
  );
}
