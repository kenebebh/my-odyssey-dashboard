// import { useState } from "react";
// import { Button, Flex, IconButton, Heading, Text } from "@radix-ui/themes";
// import { Close } from "@/components/partials/general-icons";
// // import { openSans } from "@/config";
// import * as Dialog from "@radix-ui/react-dialog";
// // import { EditProfileForm } from ".";

// export default function EditProfileModal() {
//   const [flow, setFlow] = useState("default");
//   const [editProfileModal, setEditProfileModal] = useState(false);

//   return (
//     <Dialog.Root
//       onOpenChange={setEditProfileModal}
//       open={editProfileModal}
//       modal={false}
//     >
//       <Dialog.Trigger className="py-2 px-4 bg-greenPrimary text-white border border-greenPrimary rounded-lg text-sm font-medium">
//         Edit Profile
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <div className="fixed inset-0 z-30 bg-black/50"></div>
//         <Dialog.Content
//           className={`fixed left-1/2 top-1/2 z-40 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 font-sans shadow-card sm:max-w-xl`}
//         >
//           <Flex align={"center"} mb={"6"} justify={"between"} pb={"5"}>
//             <h1 className="text-xl font-bold">Edit Your Profile</h1>
//             <Dialog.Close>
//               <IconButton
//                 onClick={() => setFlow("default")}
//                 variant="ghost"
//                 size={"2"}
//               >
//                 <Close />
//               </IconButton>
//             </Dialog.Close>
//           </Flex>

//           <div className="sm:w-full mt-6 h-[500px] overflow-y-auto">
//             {/* <EditProfileForm setEditProfileModal={setEditProfileModal} /> */}
//             form
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

export default function EditUserModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <div className="flex justify-end">
          <div className="flex flex-row w-fit items-center gap-x-2 border p-2 rounded-md border-slate-600 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0.5">
            <p className="font-semibold">Edit User Details</p>
            <Pencil />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
