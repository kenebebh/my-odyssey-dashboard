"use client";

import { useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IUser, IUsers, IUserData } from "@/lib/types/user";
import { queryWithErrorHandling } from "@/hooks/queryWithErrorHandling";

// const usersService = new ApiService<IUsers, IUser>("/users");
const usersService = new ApiService<IUsers, IUserData>("/users");

// mutation utility
function usersMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (variables: T) => mutationCallback(variables, params),
    retry: 3,
  });
}

// query utility
// function usersQuery<B>(
//   queryCallback: QueryCallBack<B>,
//   queryKey: string[],
//   params: string
// ) {
//   return useQuery({
//     queryKey: queryKey,
//     queryFn: () => queryCallback(params),
//     retry: 3,
//   });
// }

// query utility with error handling
function usersQuery<TData = IUsers | IUserData>(
  queryCallback: QueryCallBack<TData>,
  queryKey: string[],
  params: string
) {
  return queryWithErrorHandling<TData, unknown, TData, string[]>(
    queryCallback,
    queryKey,
    params,
    { retry: 3 }
  );
}

// Define the type for UsersAdapter
interface IUsersAdapter {
  getAllUsers: () => Promise<IUsers>;
  getUserDetails: (id: string | number) => Promise<IUserData>;
  editUserDetails: (payload: any, params: string) => Promise<any>;
}

const UsersAdapter: IUsersAdapter = {
  getAllUsers: async function () {
    const res = await usersService.getAll("/");
    return res;
  },
  getUserDetails: async function (id: string | number) {
    const res = await usersService.getById(`${id}`);
    return res;
  },
  editUserDetails: async function (payload: any, params: string) {
    const res = await usersService.mutate(
      `${params}`,
      payload,
      "JSON",
      "PATCH"
    );
    return res;
  },
};

export { usersMutation, usersQuery, UsersAdapter };
