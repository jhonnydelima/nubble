import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useGetUserById(userId: number) {
  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: [QueryKeys.GetUserById, userId],
    queryFn: () => userService.getById(userId),
    staleTime: 1000 * 30, // 30 seconds
    // cacheTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Retry once on failure
  });

  return {
    user: data,
    isError,
    isLoading,
    refetch,
  };
}
