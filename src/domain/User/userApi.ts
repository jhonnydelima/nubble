import {api} from '@api';

import {UserAPI} from './userTypes';

const USER_API_BASE_URL = '/users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${USER_API_BASE_URL}/${userId}`);
  return response.data;
}

export const userApi = {
  getById,
};
