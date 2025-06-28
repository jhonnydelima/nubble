import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(userId: number): Promise<User> {
  const apiResponse = await userApi.getById(userId.toString());
  return userAdapter.toUser(apiResponse);
}

export const userService = {
  getById,
};
