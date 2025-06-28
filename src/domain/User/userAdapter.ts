import {User, UserAPI} from './userTypes';

/**
 * @description This function is used to convert the API response to a User object.
 * It takes a UserAPI object as input and returns a User object.
 * @param {UserAPI} userAPI - The UserAPI object to be converted.
 * @returns {User} - The converted User object.
 */
function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    username: userAPI.username,
    email: userAPI.email,
    profileURL: userAPI.profile_url,
    isOnline: userAPI.is_online,
    fullName: userAPI.full_name,
  };
}

export const userAdapter = {
  toUser,
};
