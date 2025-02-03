"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IUser } from "@/lib/types/user";
import { queryWithErrorHandling } from "@/hooks/queryWithErrorHandling";

const usersService = new ApiService<IUser[], IUser>("/users");

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
function usersQuery<TData = IUser | IUser[]>(
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

const UsersAdapter = {
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
