"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IUser } from "@/lib/types/user";

const usersService = new ApiService<IUser[], IUser>("/users");

// mutation utility
function usersMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (variables: T) => mutationCallback(variables, params),
  });
}

// query utility
function usersQuery<B>(
  queryCallback: QueryCallBack<B>,
  queryKey: string[],
  params: string
) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(params),
  });
}

const UsersAdapter = {
  getAllUsers: async function () {
    const res = await usersService.getAll("/");
    return res;
  },
};

export { usersMutation, usersQuery, UsersAdapter };
