import {
  type UseQueryOptions,
  type UseQueryResult,
  type QueryKey,
  useQuery,
} from "@tanstack/react-query";
import { getErrorMessage } from "../utils/errorHandler";

export function queryWithErrorHandling<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryCallback: (params: string) => Promise<TQueryFnData>,
  queryKey: TQueryKey,
  params: string,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<TData, string> & { errorMessage: string | null } {
  const queryFn = () => queryCallback(params);
  const queryOptions: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> =
    {
      ...options,
      queryKey,
      queryFn,
    };

  const query = useQuery<TQueryFnData, TError, TData, TQueryKey>(queryOptions);

  const errorMessage = query.isError ? getErrorMessage(query.error) : null;

  return {
    ...query,
    errorMessage,
    error: errorMessage as string,
  } as UseQueryResult<TData, string> & { errorMessage: string | null };
}
