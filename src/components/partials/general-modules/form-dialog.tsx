import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FormDialogProps {
  triggerContent: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FormDialog({
  triggerContent,
  title,
  description,
  children,
  onSubmit,
  open,
  onOpenChange,
}: FormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <form onSubmit={onSubmit}>
          {children}
          <div className="flex justify-end mt-4">
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
