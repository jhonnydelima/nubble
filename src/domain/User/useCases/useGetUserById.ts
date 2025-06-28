import {useCallback, useEffect, useState} from 'react';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useGetUserById(userId: number) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      const _user = await userService.getById(userId);
      setUser(_user);
    } catch (err) {
      setError(true);
      console.error('Error fetching user: ', err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    error,
    loading,
    refetch: getUserById,
  };
}
