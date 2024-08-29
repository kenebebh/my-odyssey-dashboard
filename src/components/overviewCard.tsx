import React from "react";

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactElement;
}

export default function OverviewCard(item: CardProps) {
  return (
    <div className="border px-2 py-3 flex items-center gap-x-2">
      <div className="">{item.icon}</div>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xl font-medium">{item.title}</h3>
        <h4 className="text-lg font-normal">{item.value}</h4>
      </div>
    </div>
  );
}
