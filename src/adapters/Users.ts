import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import { ApiService } from "@/services";
import { IUser } from "@/lib/types/user";

const usersService = new ApiService<IUser[], IUser>("/users");
