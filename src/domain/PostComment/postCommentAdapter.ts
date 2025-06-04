import {dateUtils} from '@utils';

import {PostComment, PostCommentAPI} from './postCommentTypes';

/**
 * @description This function is used to convert the API response to a PostComment object.
 * It takes a PostCommentAPI object as input and returns a PostComment object.
 * @param {PostCommentAPI} postCommentAPI - The PostCommentAPI object to be converted.
 * @returns {PostComment} - The converted PostComment object.
 */
function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    createdAt: postCommentAPI.created_at,
    createdAtRelative: dateUtils.formatRelative(postCommentAPI.created_at),
    author: {
      id: postCommentAPI.user.id,
      profileURL: postCommentAPI.user.profile_url,
      name: postCommentAPI.user.full_name,
      userName: postCommentAPI.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
