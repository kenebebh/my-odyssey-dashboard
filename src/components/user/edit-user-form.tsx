// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { FormDialog } from "../partials/general-modules";
// import { Pencil } from "lucide-react";
// import FormData from "form-data";
// import { useRouter } from "next/navigation";
// import { usersMutation, UsersAdapter } from "@/adapters";
// import { useQueryClient } from "@tanstack/react-query";
// import { useToast } from "@/hooks/use-toast";
// import axios from "axios";

// interface IUserEdit {
//   firstName: string;
//   lastName: string;
//   email: string;
//   verified: string;
//   deactivated: boolean;
//   phone: number;
//   address: string;
//   city: string;
//   country: string;
//   _id: string;
// }

// export default function EditUserForm({
//   firstName,
//   lastName,
//   email,
//   verified,
//   deactivated,
//   phone,
//   address,
//   city,
//   country,
//   _id,
// }: IUserEdit) {
//   const { toast } = useToast();
//   const formData = new FormData();
//   const queryClient = useQueryClient();

//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState<IUserEdit>({
//     firstName: firstName || "",
//     lastName: lastName || "",
//     email: email || "",
//     verified: verified || "",
//     deactivated: deactivated || false,
//     phone: phone || 0,
//     address: address || "",
//     city: city || "",
//     country: country || "",
//     _id: _id,
//   });

//   const { mutateAsync, isPending } = usersMutation(
//     UsersAdapter.editUserDetails,
//     _id
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const initialUserDetails: IUserEdit = {
//       firstName,
//       lastName,
//       email,
//       verified,
//       deactivated,
//       phone,
//       address,
//       city,
//       country,
//       _id,
//     };

//     console.log(initialUserDetails);

//     // const updatedFields = Object.entries(userDetails).reduce<
//     //   Partial<IUserEdit>
//     // >((acc, [key, value]) => {
//     //   if (value !== initialUserDetails[key as keyof IUserEdit]) {
//     //     acc[key as keyof IUserEdit] = value;
//     //   }
//     //   return acc;
//     // }, {});

//     // This line starts the process of creating a new object called updatedFields
//     const updatedFields = Object.entries(userDetails)
//       // Object.entries converts an object into an array of [key, value] pairs
//       // .reduce is a method that processes each item in an array to produce a single result
//       // <Partial<IUserEdit>> specifies the type of the result (an object with some or all properties of IUserEdit)
//       .reduce<Partial<IUserEdit>>(
//         // This function is called for each [key, value] pair in userDetails
//         // acc (short for accumulator) is the object we're building up
//         // [key, value] is the current [key, value] pair being processed
//         (acc, [key, value]) => {
//           // Check if the current value is different from the original value
//           if (value !== initialUserDetails[key as keyof IUserEdit]) {
//             // If it's different, add this [key, value] pair to our accumulator object
//             acc[key as keyof IUserEdit] = value;
//           }
//           // Return the accumulator for the next iteration
//           return acc;
//         },
//         // {} is the initial value of our accumulator (an empty object)
//         {}
//       );

//     console.log(updatedFields);

//     if (Object.keys(updatedFields).length === 0) {
//       toast({
//         title: "No Changes",
//         description: "No fields were modified",
//         variant: "default",
//       });
//       return;
//     }

//     // try {
//     //   const res = await mutateAsync(updatedFields);
//     //   console.log(`response is ${res}`);
//     //   if (res && res.data) {
//     //     queryClient.invalidateQueries({ queryKey: ["user", _id] });
//     //     toast({
//     //       title: "Success",
//     //       description: "User details updated successfully",
//     //     });
//     //     setIsDialogOpen(false); // Close the dialog
//     //   } else {
//     //     throw new Error("No data returned from server");
//     //   }
//     // } catch (error) {
//     //   console.error("Error:", error);
//     //   let errorMessage = "Failed to update user details";
//     //   if (axios.isAxiosError(error) && error.response) {
//     //     errorMessage = error.response.data.message || errorMessage;
//     //   }
//     //   toast({
//     //     title: "Error",
//     //     description: errorMessage,
//     //     variant: "destructive",
//     //   });
//     // }
//   };

//   const triggerContent = (
//     <div className="flex justify-end">
//       <div className="flex flex-row w-fit items-center gap-x-2 border p-2 rounded-md border-slate-600 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0.5">
//         <p className="font-semibold">Edit User Details</p>
//         <Pencil />
//       </div>
//     </div>
//   );

//   return (
//     <FormDialog
//       triggerContent={triggerContent}
//       title="Edit User Details"
//       description="Make changes to the user's profile here."
//       onSubmit={handleSubmit}
//       open={isDialogOpen}
//       onOpenChange={setIsDialogOpen}
//       isPending={isPending}
//     >
//       <div className="grid gap-4 py-4">
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="firstName" className="text-right">
//             First Name
//           </Label>
//           <Input
//             id="firstName"
//             name="firstName"
//             value={userDetails.firstName}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="lastName" className="text-right">
//             Last Name
//           </Label>
//           <Input
//             id="lastName"
//             name="lastName"
//             value={userDetails.lastName}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="email" className="text-right">
//             Email
//           </Label>
//           <Input
//             id="email"
//             name="email"
//             value={userDetails.email}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="verified" className="text-right">
//             Verification status
//           </Label>
//           <Input
//             id="verified"
//             name="verified"
//             value={userDetails.verified}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         {/* <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="deactivated" className="text-right">
//             Deactivated
//           </Label>
//           <Input
//             id="deactivated"
//             name="deactivated"
//             value={userDetails.deactivated}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div> */}
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="phone" className="text-right">
//             Phone Number
//           </Label>
//           <Input
//             id="phone"
//             name="phone"
//             value={userDetails.phone}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="address" className="text-right">
//             Address
//           </Label>
//           <Input
//             id="address"
//             name="address"
//             value={userDetails.address}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="city" className="text-right">
//             City
//           </Label>
//           <Input
//             id="city"
//             name="city"
//             value={userDetails.city}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="country" className="text-right">
//             Country
//           </Label>
//           <Input
//             id="country"
//             name="country"
//             value={userDetails.country}
//             onChange={handleChange}
//             className="col-span-3 text-green-800 placeholder:text-green-800"
//           />
//         </div>
//       </div>
//     </FormDialog>
//   );
// }

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormDialog } from "../partials/general-modules";
import { Pencil } from "lucide-react";
import { usersMutation, UsersAdapter } from "@/adapters";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface IUserEdit {
  firstName: string;
  lastName: string;
  email: string;
  verified: "verified" | "unverified";
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
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<IUserEdit>({
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    verified: verified || "unverified",
    deactivated: deactivated || false,
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

  const handleVerifiedChange = (value: "verified" | "unverified") => {
    setUserDetails((prev) => ({ ...prev, verified: value }));
  };

  const handleDeactivatedChange = (checked: boolean) => {
    setUserDetails((prev) => ({ ...prev, deactivated: checked }));
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

    console.log(updatedFields);

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
      console.log(res);
      if (res && res.data) {
        queryClient.invalidateQueries({ queryKey: ["user", _id] });
        toast({
          title: "Success",
          description: "User details updated successfully",
        });
        setIsDialogOpen(false);
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
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      isPending={isPending}
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
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="verified" className="text-right">
            Verification status
          </Label>
          <Select
            value={userDetails.verified}
            onValueChange={handleVerifiedChange}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select verification status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="unverified">Unverified</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="deactivated" className="text-right">
            Deactivated
          </Label>
          <div className="col-span-3 flex items-center">
            <Switch
              id="deactivated"
              checked={userDetails.deactivated}
              onCheckedChange={handleDeactivatedChange}
            />
            <span className="ml-2">
              {userDetails.deactivated ? "Yes" : "No"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phone" className="text-right">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="address" className="text-right">
            Address
          </Label>
          <Input
            id="address"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="city" className="text-right">
            City
          </Label>
          <Input
            id="city"
            name="city"
            value={userDetails.city}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="country" className="text-right">
            Country
          </Label>
          <Input
            id="country"
            name="country"
            value={userDetails.country}
            onChange={handleChange}
            className="col-span-3 text-green-800 placeholder:text-green-800"
          />
        </div>
      </div>
    </FormDialog>
  );
}
