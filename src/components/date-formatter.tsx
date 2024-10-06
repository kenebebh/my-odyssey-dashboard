import React from "react";

interface DateFormatterProps {
  dateString: string;
  className?: string;
}

export function DateFormatter({ dateString, className }: DateFormatterProps) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(dateString);

  return <span className={className}>{formattedDate}</span>;
}
