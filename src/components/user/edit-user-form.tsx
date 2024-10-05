"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormDialog } from "../partials/general-modules";
import { Pencil } from "lucide-react";
import FormData from "form-data";
import { useRouter } from "next/navigation";
import { usersMutation, UsersAdapter } from "@/adapters";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { IUser } from "@/lib/types/user";
import axios from "axios";

interface IUserEdit {
  firstName: string;
  lastName: string;
  email: string;
  verified: string;
  deactivated: boolean;
  phone: number;
  address: string;
  city: string;
  country: string;
  _id: string;
}

export default function EditUserForm({
  firstName,
  lastName,
  email,
  verified,
  deactivated,
  phone,
  address,
  city,
  country,
  _id,
}: IUserEdit) {
  const router = useRouter();
  const { toast } = useToast();
  const formData = new FormData();
  const queryClient = useQueryClient();

  //   console.log(`user data: ${firstName}`);

  const [userDetails, setUserDetails] = useState<IUserEdit>({
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    verified: verified || "",
    deactivated: deactivated ? true : false,
    phone: phone || 0,
    address: address || "",
    city: city || "",
    country: country || "",
    _id: _id,
  });

  const { mutateAsync, isPending } = usersMutation(
    UsersAdapter.editUserDetails,
    _id
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const initialUserDetails: IUserEdit = {
      firstName,
      lastName,
      email,
      verified,
      deactivated,
      phone,
      address,
      city,
      country,
      _id,
    };

    const updatedFields = Object.entries(userDetails).reduce<
      Partial<IUserEdit>
    >((acc, [key, value]) => {
      if (value !== initialUserDetails[key as keyof IUserEdit]) {
        acc[key as keyof IUserEdit] = value;
      }
      return acc;
    }, {});

    if (Object.keys(updatedFields).length === 0) {
      toast({
        title: "No Changes",
        description: "No fields were modified",
        variant: "default",
      });
      return;
    }

    try {
      const res = await mutateAsync(updatedFields);
      if (res && res.data) {
        queryClient.setQueryData(["user", res.data.id], res.data);
        toast({
          title: "Success",
          description: "User details updated successfully",
        });
      } else {
        throw new Error("No data returned from server");
      }
    } catch (error) {
      console.error("Error:", error);
      let errorMessage = "Failed to update user details";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const triggerContent = (
    <div className="flex justify-end">
      <div className="flex flex-row w-fit items-center gap-x-2 border p-2 rounded-md border-slate-600 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0.5">
        <p className="font-semibold">Edit User Details</p>
        <Pencil />
      </div>
    </div>
  );

  return (
    <FormDialog
      triggerContent={triggerContent}
      title="Edit User Details"
      description="Make changes to the user's profile here."
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="firstName" className="text-right">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="lastName" className="text-right">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
      </div>
    </FormDialog>
  );

  return (
    <div>
      <p>hello world</p>
    </div>
  );
}
