import {Post, PostAPI} from './postTypes';

/**
 * @description This function is used to convert the API response to a Post object.
 * It takes a PostAPI object as input and returns a Post object.
 * @param {PostAPI} postAPI - The PostAPI object to be converted.
 * @returns {Post} - The converted Post object.
 */
function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id,
    text: postAPI.text,
    author: {
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
    },
    imageURL: postAPI.image_url,
    reactionCount: Number(postAPI.meta.like_count),
    commentCount: Number(postAPI.meta.comments_count),
    favoriteCount: Number(postAPI.meta.favorite_count),
  };
}

export const postAdapter = {
  toPost,
};
