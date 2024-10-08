"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="">
      <Button
        variant="ghost"
        onClick={handleGoBack}
        className="flex items-center text-lg"
      >
        <ArrowLeft className="mr-2 h-6 w-6" />
        Back
      </Button>
    </div>
  );
}
