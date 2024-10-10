import React from "react";

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactElement;
}

export default function OverviewCard(item: CardProps) {
  return (
    <div className="border rounded-sm shadow-md pl-2 py-6 flex items-center min-w-[18rem] justify-between gap-x-4 h-36">
      <div className="w-10">
        <div className="border border-accentGrey rounded-full p-3 flex justify-center items-center">
          {item.icon}
        </div>
      </div>
      <div className="basis-3/4 flex flex-col gap-y-1">
        <h3 className="text-xl font-medium">{item.title}</h3>
        <h4 className="font-semibold">{item.value}</h4>
      </div>
    </div>
  );
}
