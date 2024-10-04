// import React, { Dispatch, SetStateAction, useState, useContext } from "react";
// import { ImagePlaceholder, Loading, Remove } from "../partials/general-icons";
// import FormData from "form-data";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { usersMutation, UsersAdapter } from "@/adapters";
// // import { UserContext, type IUserContext } from "@/contexts/user-context";
// import { useQueryClient } from "@tanstack/react-query";

// export default function EditProfileForm({
//   setEditProfileModal,
// }: {
//   setEditProfileModal: Dispatch<SetStateAction<boolean>>;
// }) {

//   const formData = new FormData();
//   const queryClient = useQueryClient();

//   const router = useRouter();
//   const [mediaValue, setMediaValue] = useState<File | string>("");
//   const [mediaPreview, setMediaPreview] = useState("");
//   const [name, setName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [bio, setBio] = useState("");

//   const [genres, setSelectedGenres] = useState([]);

//   const { mutateAsync, isPending } = usersMutation(
//     UsersAdapter.editUserBio,
//     ""
//   );

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     formData.append("fullName", name);
//     formData.append("username", userName);
//     formData.append("bio", bio);
//     formData.append("image", mediaValue);

//     try {
//       //@ts-ignore

//       const res = await mutateAsync(formData);
//       queryClient.setQueryData(["user", res?.data.id], res?.data);
//       toast.success("You have successfully edited your profile");
//       setEditProfileModal(false);
//     } catch (error) {
//       toast.error(error);
//     }

//     // const res = await mutateAsync(formData);
//     // console.log(res);
//   };

//   const DisplaySelectedGenre = ({
//     genre,
//     indexNumber,
//   }: {
//     genre: string;
//     indexNumber: number;
//   }) => {
//     const deleteItem = (itemName: string) => {
//       setSelectedGenres((prevItems) => {
//         return prevItems.filter((item) => item !== itemName);
//       });
//     };

//     return (
//       <div
//         className={`flex items-center gap-x-2 rounded-3xl bg-green-100 px-4 py-0.5`}
//       >
//         <p>{genre}</p>
//         <p onClick={() => deleteItem(genre)}>
//           <Remove />
//         </p>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
//         <section className="mb-6">
//           <label
//             htmlFor="profilePic"
//             className=" self-start font-body text-base font-medium"
//           >
//             Profile Image
//           </label>
//           <div className="max-h-[220px] mt-4 rounded-2xl overflow-hidden">
//             <label
//               className="h-[220px] rounded-2xl w-full cursor-pointer overflow-hidden"
//               htmlFor="profilePic"
//             >
//               {!mediaPreview ? (
//                 <div className="mx-auto flex flex-col items-center rounded-2xl bg-slate-100 py-16 text-center">
//                   <Image />

//                   {/* <p className="mt-5 text-slate-400">Add a club profilePic</p> */}
//                 </div>
//               ) : (
//                 <img
//                   className="w-full object-cover object-center"
//                   src={mediaPreview}
//                 />
//               )}
//             </label>
//             <input
//               onChange={(e) => {
//                 //@ts-ignore
//                 if (e.target.files[0]?.name) {
//                   e.target.files && setMediaValue(e.target.files[0]);
//                   setMediaPreview(
//                     e.target.files ? URL.createObjectURL(e.target.files[0]) : ""
//                   );
//                 }
//               }}
//               className="hidden"
//               id="profilePic"
//               type="file"
//             />
//           </div>
//         </section>

//         <section className="mb-4 flex flex-col gap-1.5 text-sm font-medium text-secondary">
//           <label htmlFor="name">Name</label>
//           <input
//             className="px-3.5 py-2.5 border border-slate-400 rounded-lg"
//             type="text"
//             id="name"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             defaultValue={user?.fullName}
//           />
//         </section>

//         <section className="mb-4 flex flex-col gap-1.5 text-sm font-medium text-secondary">
//           <label htmlFor="name">Username</label>
//           <input
//             className="px-3.5 py-2.5 border border-slate-400 rounded-lg"
//             type="text"
//             id="username"
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//             defaultValue={user?.username}
//           />
//         </section>

//         <section className="mb-4 flex flex-col gap-1.5 text-sm font-medium text-secondary">
//           <label htmlFor="name">Bio</label>
//           <textarea
//             // className="flex flex-col w-full border border-slate-400 items-center px-6 py-4 pb-8 justify-center cursor-pointer rounded-lg"
//             className="px-3.5 py-2.5 border border-slate-400 rounded-lg"
//             id="bio"
//             cols={30}
//             rows={3}
//             placeholder="Enter Bio"
//             onChange={(e) => {
//               setBio(e.target.value);
//             }}
//             defaultValue={user?.bio}
//           ></textarea>
//         </section>

//         {/* <section className="relative mb-4 w-full">
//           <label
//             htmlFor="genre"
//             className="self-start font-body text-base font-medium"
//           >
//             Genre <span className="text-red-500">*</span>
//           </label>

//           <Dialog.Root>
//             <Dialog.Trigger className="relative block w-full">
//               <div
//                 id="genre"
//                 placeholder="Select Genre"
//                 className=" mt-2 flex w-full items-center justify-between rounded-md border border-accent/20 px-6 py-4"
//               >
//                 <p>Select a genre</p>

//                 <ArrowRight />
//               </div>
//             </Dialog.Trigger>

//             <Dialog.DialogPortal>
//               <Dialog.Overlay className="fixed inset-0  bg-black/50" />
//               <Dialog.Content className="fixed bottom-0 z-40 flex w-full justify-center rounded-xl bg-white p-6 font-sans shadow-card ">
//                 <Dialog.Close>
//                   <SelectGenre updateBookClubDetails={updateBookClubDetails} />
//                 </Dialog.Close>
//               </Dialog.Content>
//             </Dialog.DialogPortal>
//           </Dialog.Root>

//           {bookClubDetails.selectedGenres.length !== 0 && (
//             <div className="my-6 flex flex-wrap gap-x-5 gap-y-4">
//               {bookClubDetails.selectedGenres.map((genre, index) => {
//                 // return displaySelectedGenre(genre);
//                 return (
//                   <DisplaySelectedGenre
//                     key={genre}
//                     genre={genre}
//                     indexNumber={index}
//                   />
//                 );
//               })}
//             </div>
//           )}
//         </section> */}

//         <button
//           type="submit"
//           disabled={isPending}
//           className="mt-6 w-full rounded-2xl bg-greenSecondary px-8 py-[18px] font-medium text-white"
//         >
//           {isPending ? <Loading /> : "Edit Bio"}
//         </button>
//       </form>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormDialog } from "../partials/general-modules";
import { Pencil } from "lucide-react";

export default function EditUserForm({ userID }: { userID: string }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted");
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
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
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
    </FormDialog>
  );
}
