import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useGetUserById(userId: number) {
  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: [QueryKeys.GetUserById, userId],
    queryFn: () => userService.getById(userId),
  });

  return {
    user: data,
    isError,
    isLoading,
    refetch,
  };
}
