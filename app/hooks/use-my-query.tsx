import {
  InvalidateOptions,
  InvalidateQueryFilters,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "react-query";

const QueryKeyList = ["useQueryGetListWedding", "useQueryGetDetailWedding"] as const;
export type MyQueryKey = (typeof QueryKeyList)[number];

export function useMyQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData
>({
  queryKey,
  ...options
}: Omit<UseQueryOptions<TQueryFnData, TError, TData, string[]>, "queryKey"> & {
  queryKey: [val1: MyQueryKey, ...val2: string[]];
}): UseQueryResult<TData, TError> {
  return useQuery<TQueryFnData, TError, TData, string[]>({
    ...options,
    queryKey,
  });
}

export function useMyQueryClient() {
  const { invalidateQueries, ...props } = useQueryClient();

  function myInvalidateQueries<TPageData = unknown>(
    queryKey?: [key1: MyQueryKey, ...val2: string[]],
    filters?: InvalidateQueryFilters<TPageData>,
    options?: InvalidateOptions
  ): Promise<void> {
    console.log({ queryKey });
    return invalidateQueries({
      queryKey,
      ...filters,
      ...options,
    });
  }

  return {
    ...props,
    myInvalidateQueries,
  };
}
